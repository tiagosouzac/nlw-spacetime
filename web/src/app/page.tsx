export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div></div>

      {/* Right */}
      <div className="grid p-16">
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
