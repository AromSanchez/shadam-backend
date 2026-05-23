# Practicando API

## Requisitos
- Node.js 18+
- PostgreSQL corriendo en localhost:5432

## Instalación

# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales

# 3. Ejecutar migraciones
npx prisma migrate dev

# 4. Crear usuario admin
npm run seed

# 5. Levantar el servidor
npm run start:dev