import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const existing = await prisma.user.findUnique({
    where: { email: 'admin@system.com' },
  });

  if (existing) {
    console.log('Admin ya existe, skipping...');
    return;
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.create({
    data: {
      name: 'Administrador',
      email: 'admin@system.com',
      password: hashedPassword,
      role: 'admin',
      first_login: false,
      is_active: true,
      balance: 0,
    },
  });

  console.log('Admin creado:', admin.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());