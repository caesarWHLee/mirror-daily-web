import {
  RECAPTCHA_SITE_KEY,
  RECAPTCHA_API_KEY,
  RECAPTCHA_SCORE,
} from '@/constants/config'
import { useEffect, useState } from 'react'

export default function useRecaptcha() {
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  useEffect(() => {
    if (window.grecaptcha) {
      setIsRecaptchaReady(true)
      return
    }
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.onload = () => setIsRecaptchaReady(true)
    document.body.appendChild(script)
  }, [])

  const executeRecaptcha = async (action: string): Promise<string> => {
    if (!isRecaptchaReady || !window.grecaptcha) {
      return Promise.reject(new Error('reCAPTCHA is not ready'))
    }

    return new Promise((resolve, reject) => {
      window.grecaptcha.enterprise.ready(async () => {
        window.grecaptcha.enterprise
          .execute(RECAPTCHA_SITE_KEY, { action })
          .then((token: string) => resolve(token))
          .catch((error: Error) => {
            reject(new Error(`executeRecaptcha Error: ${error}`))
          })
      })
    })
  }

  const verifyRecaptcha = async ({
    token,
    action,
  }: {
    token: string
    action: string
  }): Promise<boolean> => {
    setIsVerifying(true)

    try {
      const response = await fetch(
        `https://recaptchaenterprise.googleapis.com/v1/projects/mirrordaily/assessments?key=${RECAPTCHA_API_KEY}`,
        {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: {
              token,
              expectedAction: action,
              siteKey: RECAPTCHA_SITE_KEY,
            },
          }),
        }
      )

      // https://cloud.google.com/recaptcha/docs/interpret-assessment-website#interpret_assessment
      const assessments = await response.json()

      if (!response.ok) {
        throw new Error(
          `verifyRecaptcha Error: ${response.status} ${response.statusText}`
        )
      }

      const { riskAnalysis, tokenProperties } = assessments
      const { score } = riskAnalysis
      const { valid, invalidReason } = tokenProperties
      if (!valid) throw new Error('Invalid reCAPTCHA token:', invalidReason)
      return score > RECAPTCHA_SCORE
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      return false
    } finally {
      setIsVerifying(false)
    }
  }

  const handleRecaptchaVerification = async (action: string) => {
    try {
      const token = await executeRecaptcha(action)
      const isValid = await verifyRecaptcha({ token, action })
      return isValid
    } catch (error) {
      console.error('reCAPTCHA ', error)
      return false
    }
  }

  return {
    executeRecaptcha,
    isVerifying,
    handleRecaptchaVerification,
  }
}
