# Migration `20200919002645-migrate-to-mysql`

This migration has been generated by rob Moya at 9/18/2020, 6:26:45 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `pvlse`.`Activities` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`name` varchar(191)  NOT NULL ,
`price` varchar(191)  NOT NULL ,
`description` varchar(191)  NOT NULL ,
`place` varchar(191)  NOT NULL ,
`startDate` datetime(3)  NOT NULL ,
`level` varchar(191)  NOT NULL ,
`userJoin` int  NOT NULL DEFAULT 0,
`languages` varchar(191)  NOT NULL ,
`userId` int  ,
`categoriesId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `pvlse`.`User` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`email` varchar(191)  NOT NULL ,
`name` varchar(191)  ,
`pass` varchar(191)  ,
`active` boolean  NOT NULL DEFAULT false,
`userSessions` int  NOT NULL ,
UNIQUE Index `User.email_unique`(`email`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `pvlse`.`Categories` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  ,
`color` varchar(191)  ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
UNIQUE Index `Categories.name_unique`(`name`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `pvlse`.`Activities` ADD FOREIGN KEY (`userId`) REFERENCES `pvlse`.`User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `pvlse`.`Activities` ADD FOREIGN KEY (`categoriesId`) REFERENCES `pvlse`.`Categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200918032639-add-categories-to-pvlse-table..20200919002645-migrate-to-mysql
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,8 @@
 datasource db {
-  provider = "sqlite"
-  url = "***"
+  provider = "mysql"
+  url = "***"
 }
-
 generator client {
   provider = "prisma-client-js"
 }
```


