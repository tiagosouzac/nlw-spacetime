export function EmptyMemories() {
  return (
    <div className="flex items-center justify-center">
      <p className="max-w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a className="underline hover:text-gray-50" href="/">
          criar agora
        </a>
        !
      </p>
    </div>
  )
}
