import { randomUUID } from 'node:crypto'
import { extname, resolve } from 'node:path'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import { FastifyInstance } from 'fastify'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
      },
    })

    if (!upload) {
      return reply.status(400).send({ message: 'No file uploaded' })
    }

    const regex = /(image|video)\/(png|jpe?g|gif|mp4)/
    const isValidFormat = regex.test(upload.mimetype)

    if (!isValidFormat) {
      return reply.status(400).send({ message: 'Invalid file format' })
    }

    const fileId = randomUUID()
    const fileExtension = extname(upload.filename)
    const fileName = `${fileId}${fileExtension}`

    const writeStream = createWriteStream(
      resolve(__dirname, '..', '..', 'uploads', fileName),
    )

    await pump(upload.file, writeStream)

    const fullUrl = `${request.protocol}://${request.hostname}`
    const fileUrl = `${fullUrl}/uploads/${fileName}`

    return { fileUrl }
  })
}
