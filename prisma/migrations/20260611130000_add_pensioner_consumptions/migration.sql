-- CreateEnum
CREATE TYPE "PensionerType" AS ENUM ('ESTUDIANTE', 'TRABAJADOR');

-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('DESAYUNO', 'ALMUERZO', 'CENA');

-- AlterTable
ALTER TABLE "users" ADD COLUMN "pensioner_type" "PensionerType";

-- CreateTable
CREATE TABLE "consumptions" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "mealType" "MealType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consumptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_config" (
    "id" TEXT NOT NULL,
    "mealType" "MealType" NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "price_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "consumptions_userId_idx" ON "consumptions"("userId");
CREATE INDEX "consumptions_date_idx" ON "consumptions"("date");
CREATE INDEX "consumptions_userId_date_idx" ON "consumptions"("userId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "price_config_mealType_key" ON "price_config"("mealType");

-- AddForeignKey
ALTER TABLE "consumptions" ADD CONSTRAINT "consumptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Seed default prices
INSERT INTO "price_config" ("id", "mealType", "price", "updatedAt") VALUES
  (gen_random_uuid()::text, 'DESAYUNO', 5.00, NOW()),
  (gen_random_uuid()::text, 'ALMUERZO', 8.00, NOW()),
  (gen_random_uuid()::text, 'CENA', 6.00, NOW());
