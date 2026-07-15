import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client.js'
import { env } from '../config/env.js'

declare global {
  // eslint-disable-next-line no-var
  var prismaClient: PrismaClient | undefined
}

const adapter = new PrismaPg({ connectionString: env.databaseUrl })

export const prisma = globalThis.prismaClient ?? new PrismaClient({ adapter })

if (env.nodeEnv !== 'production') {
  globalThis.prismaClient = prisma
}
