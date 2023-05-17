import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative grid content-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a
          className="group flex items-center gap-3 text-left transition-colors hover:text-gray-50"
          href=""
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500 transition-colors group-hover:text-gray-100" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>
      </div>

      {/* Right */}
      <div className="grid bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex items-center justify-center">
          <p className="max-w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="underline hover:text-gray-50" href="/">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
