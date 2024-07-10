/*
  Warnings:

  - You are about to drop the `ArticleCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ArticleCategory" DROP CONSTRAINT "ArticleCategory_articleId_fkey";

-- DropForeignKey
ALTER TABLE "ArticleCategory" DROP CONSTRAINT "ArticleCategory_categoryId_fkey";

-- DropTable
DROP TABLE "ArticleCategory";

-- CreateTable
CREATE TABLE "_ArticleCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleCategories_AB_unique" ON "_ArticleCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleCategories_B_index" ON "_ArticleCategories"("B");

-- AddForeignKey
ALTER TABLE "_ArticleCategories" ADD CONSTRAINT "_ArticleCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleCategories" ADD CONSTRAINT "_ArticleCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
