import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map(({ id, coverUrl, content, isPublic }) => ({
      id,
      coverUrl,
      excerpt:
        content.length > 115
          ? content.substring(0, 115).concat('...')
          : content,
      isPublic,
    }))
  })

  app.get('/memories/:id', async (request) => {
    const schema = z.object({
      id: z.string().uuid(),
    })

    const { id } = schema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  app.post('/memories', async (request) => {
    const schema = z.object({
      content: z.string(),
      coverUrl: z.string().url(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = schema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '6a23050c-abe7-48f7-836c-6d7cf29863fc',
      },
    })

    return memory
  })

  app.put('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string().url(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

  app.delete('/memories/:id', async (request) => {
    const schema = z.object({
      id: z.string().uuid(),
    })

    const { id } = schema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
