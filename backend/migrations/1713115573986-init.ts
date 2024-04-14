import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1713115573986 implements MigrationInterface {
    name = 'Init1713115573986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "age" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."usuario_role_enum" NOT NULL, CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email"), CONSTRAINT "UQ_6ccff37176a6978449a99c82e10" UNIQUE ("username"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "social_network" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "link" character varying NOT NULL, CONSTRAINT "UQ_c6d7b9030ef67c8159c022aca14" UNIQUE ("link"), CONSTRAINT "PK_db57ec926ad1d548459daae6491" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_img" ("id" SERIAL NOT NULL, "imgs" bytea, "project_id" integer, CONSTRAINT "PK_9d05a9c330b2677cc101e5553cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "client" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "description" character varying NOT NULL, "url" character varying NOT NULL, "skill_id" integer, CONSTRAINT "UQ_8d808c7a5db7ec711bdda583398" UNIQUE ("url"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skill" ("id" SERIAL NOT NULL, "porcent" double precision NOT NULL, "icon" bytea, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "section" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_3c41d2d699384cc5e8eac54777d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resume" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "date_init" TIMESTAMP NOT NULL, "date_end" TIMESTAMP NOT NULL, "description" character varying NOT NULL, "company" character varying NOT NULL, "link" character varying NOT NULL, "employer" character varying NOT NULL, "city" character varying NOT NULL, "name_section" character varying NOT NULL, CONSTRAINT "UQ_3009b6149be34cc8cb30e466f1f" UNIQUE ("link"), CONSTRAINT "PK_7ff05ea7599e13fac01ac812e48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "section" character varying NOT NULL, "imgs" bytea, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastname" character varying NOT NULL, "phone" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "degree" character varying NOT NULL, "freelancer" boolean NOT NULL, "remote" boolean NOT NULL, "profession" character varying NOT NULL, "logo" bytea, CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c" UNIQUE ("email"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "project_img" ADD CONSTRAINT "FK_638ac1aebc0015efca6ab1e6c3d" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_fd406d077d023ea2f143c46801c" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_fd406d077d023ea2f143c46801c"`);
        await queryRunner.query(`ALTER TABLE "project_img" DROP CONSTRAINT "FK_638ac1aebc0015efca6ab1e6c3d"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "resume"`);
        await queryRunner.query(`DROP TABLE "section"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "skill"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "project_img"`);
        await queryRunner.query(`DROP TABLE "social_network"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
