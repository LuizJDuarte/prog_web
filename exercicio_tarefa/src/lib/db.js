import { PrismaClient } from '@prisma/client';

// Instancia unica (singleton) para evitar criar varias conexoes
// durante o hot-reload do Next.js em desenvolvimento
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
