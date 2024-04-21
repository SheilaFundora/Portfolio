import { MigrationInterface, QueryRunner } from "typeorm";

export class Jwt1713554724273 implements MigrationInterface {
    name = 'Jwt1713554724273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "activation_token" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "UQ_c159a48c5653c54c34b8420842f" UNIQUE ("activation_token")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "UQ_c159a48c5653c54c34b8420842f"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "activation_token"`);
    }

}
