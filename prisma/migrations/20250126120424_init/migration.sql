/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `u_ts` to the `categoryId` table without a default value. This is not possible if the table is not empty.
  - Added the required column `u_ts` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `u_ts` to the `variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `u_ts` to the `variantTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "variantTypes" DROP CONSTRAINT "variantTypes_productId_fkey";

-- DropIndex
DROP INDEX "product_productId_key";

-- AlterTable
ALTER TABLE "categoryId" ADD COLUMN     "c_ts" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "u_ts" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP CONSTRAINT "product_pkey",
DROP COLUMN "productId",
ADD COLUMN     "c_ts" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "u_ts" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "product_id_seq";

-- AlterTable
ALTER TABLE "variant" ADD COLUMN     "c_ts" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "u_ts" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "variantTypes" ADD COLUMN     "c_ts" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "u_ts" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "productId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");

-- AddForeignKey
ALTER TABLE "variantTypes" ADD CONSTRAINT "variantTypes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
