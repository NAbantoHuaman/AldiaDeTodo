import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    // Limit connections for serverless environments (Vercel)
    ...(process.env.NODE_ENV === 'production' && {
      log: ['error'],
    }),
  })
}

// @ts-ignore
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Cache the Prisma client in ALL environments (including production)
// This prevents creating a new client on every serverless invocation
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

// Cache in ALL environments, not just development
globalForPrisma.prisma = prisma
