import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', { code })

  const { token } = registerResponse.data

  const redirectTo = request.cookies.get('redirectTo')?.value
  const redirectUrl = redirectTo ?? new URL('/', request.url)
  const cookieExpirationInSeconds = 60 * 60 * 24 * 30 // 1 month

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpirationInSeconds}`,
    },
  })
}
