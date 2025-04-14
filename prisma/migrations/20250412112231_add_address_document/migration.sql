-- AlterTable
ALTER TABLE `person` MODIFY `isDead` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `region` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `building` VARCHAR(191) NOT NULL,
    `apartment` VARCHAR(191) NOT NULL,
    `community` VARCHAR(191) NOT NULL,
    `postal_Index` VARCHAR(191) NOT NULL,
    `personId` INTEGER NOT NULL,

    UNIQUE INDEX `address_personId_key`(`personId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `document_type` VARCHAR(191) NOT NULL,
    `document_number` VARCHAR(191) NOT NULL,
    `document_status` VARCHAR(191) NOT NULL,
    `document_department` VARCHAR(191) NOT NULL,
    `personId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document` ADD CONSTRAINT `document_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
