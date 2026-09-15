import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUser() {
  const users = await prisma.user.findMany();
  console.log(users);
}
