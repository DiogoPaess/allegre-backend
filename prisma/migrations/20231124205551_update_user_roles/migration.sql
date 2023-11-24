-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_organizationId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "organizationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
