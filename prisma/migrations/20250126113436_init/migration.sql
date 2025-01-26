/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "productId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "sellerId" TEXT NOT NULL,
    "asABrand" BOOLEAN NOT NULL,
    "categoryId" TEXT NOT NULL,
    "variants" JSONB NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoryId" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,

    CONSTRAINT "categoryId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "sellerId" TEXT NOT NULL,

    CONSTRAINT "variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variantTypes" (
    "id" SERIAL NOT NULL,
    "variantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "images" JSONB NOT NULL,
    "video" TEXT NOT NULL,
    "wasPrice" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "specification" JSONB NOT NULL,
    "variantName" TEXT NOT NULL,
    "productId" INTEGER,

    CONSTRAINT "variantTypes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_productId_key" ON "product"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "variantTypes_variantId_key" ON "variantTypes"("variantId");

-- AddForeignKey
ALTER TABLE "variantTypes" ADD CONSTRAINT "variantTypes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
