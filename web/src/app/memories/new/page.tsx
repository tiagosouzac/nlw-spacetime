import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="grid grid-rows-[max-content_1fr] content-start gap-4">
      <Link
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
        href="/"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="grid grid-rows-[max-content_1fr] gap-2">
        <div className="flex items-center gap-4">
          <label
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
            htmlFor="media"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
            <input type="file" name="media" id="media" hidden />
          </label>

          <label
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
            htmlFor="isPublic"
          >
            <input
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
            />
            Tornar memória pública
          </label>
        </div>

        <textarea
          className="w-full resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          name="content"
          spellCheck={false}
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer se lembrar para sempre."
        />
      </form>
    </div>
  )
}
