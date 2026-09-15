import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = (() => {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  }
  const globalWithPrisma = global as typeof globalThis & {
      prisma?: PrismaClient;
    };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  return globalWithPrisma.prisma;
})();

export default prisma;
