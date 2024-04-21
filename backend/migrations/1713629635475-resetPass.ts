import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetPass1713629635475 implements MigrationInterface {
    name = 'ResetPass1713629635475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "reset_pass" uuid`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "UQ_45bd9ffb51c36fb708e752f2fc2" UNIQUE ("reset_pass")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "UQ_45bd9ffb51c36fb708e752f2fc2"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "reset_pass"`);
    }

}
