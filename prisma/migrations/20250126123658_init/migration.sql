/*
  Warnings:

  - You are about to drop the column `variants` on the `product` table. All the data in the column will be lost.
  - Added the required column `variantAttribute` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "variants",
ADD COLUMN     "variantAttribute" JSONB NOT NULL;
