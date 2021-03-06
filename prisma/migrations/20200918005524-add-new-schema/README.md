# Migration `20200918005524-add-new-schema`

This migration has been generated by rob Moya at 9/17/2020, 6:55:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Activities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "level" TEXT NOT NULL,
    "userJoin" INTEGER,
    "languages" TEXT NOT NULL,
    "userId" INTEGER,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
)

CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "pass" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "userSessions" INTEGER NOT NULL
)

CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

CREATE UNIQUE INDEX "Categories.name_unique" ON "Categories"("name")

PRAGMA foreign_keys=off;
DROP TABLE "Artist";
PRAGMA foreign_keys=on

PRAGMA foreign_keys=off;
DROP TABLE "Song";
PRAGMA foreign_keys=on
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200918005524-add-new-schema
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,42 @@
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Activities {
+  id            Int      @default(autoincrement()) @id
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+  name          String
+  price         String
+  description   String
+  place         String
+  startDate     DateTime
+  level         String
+  userJoin      Int?
+  languages     String
+  user          User?   @relation(fields: [userId], references: [id])
+  userId        Int?
+}
+
+model User {
+  id            Int      @id @default(autoincrement())
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+  email         String   @unique
+  name          String?
+  pass          String?
+  active        Boolean  @default(false)
+  userSessions  Int
+}
+
+model Categories {
+  id        Int      @default(autoincrement()) @id
+  name      String?  @unique
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
```


