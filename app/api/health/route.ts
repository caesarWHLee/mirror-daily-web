export const dynamic = 'force-dyanmic'

export async function GET() {
  return Response.json({ success: true, data: 'health check passed' })
}
