/*
  Warnings:

  - You are about to drop the column `characterCount` on the `AipgUsage` table. All the data in the column will be lost.
  - Added the required column `inputCharCount` to the `AipgUsage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputCharCount` to the `AipgUsage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AipgUsage" DROP COLUMN "characterCount",
ADD COLUMN     "inputCharCount" INTEGER NOT NULL,
ADD COLUMN     "outputCharCount" INTEGER NOT NULL;
