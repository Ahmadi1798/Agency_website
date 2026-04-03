import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;
const isDev = globalThis.process?.env?.NODE_ENV === 'development';

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: isDev ? ['warn', 'error'] : ['error'],
  });

if (isDev) {
  globalForPrisma.prisma = prisma;
}
