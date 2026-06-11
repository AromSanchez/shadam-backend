-- CreateEnum
CREATE TYPE "MovementType" AS ENUM ('RECARGA', 'CONSUMO', 'AJUSTE');

-- CreateTable
CREATE TABLE "balance_movements" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "MovementType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "balance" DECIMAL(10,2) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "balance_movements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "balance_movements_userId_idx" ON "balance_movements"("userId");
CREATE INDEX "balance_movements_createdAt_idx" ON "balance_movements"("createdAt");
CREATE INDEX "balance_movements_userId_createdAt_idx" ON "balance_movements"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "balance_movements" ADD CONSTRAINT "balance_movements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
