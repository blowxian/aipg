-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dailyUsageCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastUsageDate" TIMESTAMP(3);
