/*
  Warnings:

  - The primary key for the `productos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `productos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "productos" DROP CONSTRAINT "productos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "productos_pkey" PRIMARY KEY ("id");
