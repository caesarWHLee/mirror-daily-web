import Header from '@/shared-components/header'
import Footer from '@/shared-components/footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {/* main content */}
      <div className="flex w-full max-w-screen-lg shrink-0 grow flex-col">
        {children}
      </div>
      <Footer />
    </>
  )
}
