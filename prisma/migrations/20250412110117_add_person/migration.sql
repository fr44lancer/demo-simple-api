/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Person` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `psn` VARCHAR(191) NOT NULL,
    `SSN_Indicator` BOOLEAN NOT NULL,
    `Certificate_Number` VARCHAR(191) NOT NULL,
    `IsDead` BOOLEAN NOT NULL,
    `DeathDate` VARCHAR(191) NOT NULL,
    `First_Name` VARCHAR(191) NOT NULL,
    `Last_Name` VARCHAR(191) NOT NULL,
    `Patronymic_Name` VARCHAR(191) NOT NULL,
    `Birth_Date` DATETIME(3) NOT NULL,
    `Genus` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
