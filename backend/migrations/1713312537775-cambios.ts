import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios1713312537775 implements MigrationInterface {
    name = 'Cambios1713312537775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."usuario_role_enum"`);
        await queryRunner.query(`ALTER TABLE "usuario" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" ALTER COLUMN "age" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ALTER COLUMN "age" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" ALTER COLUMN "first_name" SET NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."usuario_role_enum" AS ENUM('BASIC', 'ADMIN')`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "role" "public"."usuario_role_enum" NOT NULL`);
    }

}
