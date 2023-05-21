import Image from 'next/image'
import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3">
      <Image
        className="h-10 w-10 rounded-full object-cover"
        src={avatarUrl}
        width={40}
        height={40}
        alt={name}
      />

      <p className="text-sm leading-snug">
        {name}
        <a
          className="block text-red-400 hover:text-red-300"
          href="/api/auth/logout"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
