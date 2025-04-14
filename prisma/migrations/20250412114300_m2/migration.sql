/*
  Warnings:

  - You are about to drop the column `personId` on the `address` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_personId_fkey`;

-- DropIndex
DROP INDEX `address_personId_key` ON `address`;

-- AlterTable
ALTER TABLE `address` DROP COLUMN `personId`;

-- AlterTable
ALTER TABLE `person` ADD COLUMN `addressId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `person` ADD CONSTRAINT `person_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
