import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesAct1713648329583 implements MigrationInterface {
    name = 'EntitiesAct1713648329583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "employer"`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "lastname" character varying`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "birthday" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "address" character varying`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "degree" character varying`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "freelancer" boolean`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "remote" boolean`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "profession" character varying`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "logo" bytea`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "experience_years" integer`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "starts_git_hub" integer`);
        await queryRunner.query(`ALTER TABLE "services" ADD "icon" bytea`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "title_impt" character varying`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "title_secondary" character varying`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "country" character varying`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "subtitle" character varying`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "UQ_c5fd0b60f13db1322d55423681d"`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "date_init" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "date_end" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "link" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "name_section" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "name_section" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "link" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "date_end" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ALTER COLUMN "date_init" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "UQ_c5fd0b60f13db1322d55423681d" UNIQUE ("password")`);
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "title_secondary"`);
        await queryRunner.query(`ALTER TABLE "resume" DROP COLUMN "title_impt"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "icon"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "starts_git_hub"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "experience_years"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "profession"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "remote"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "freelancer"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "degree"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "lastname"`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "employer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "company" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resume" ADD "title" character varying NOT NULL`);
    }

}
