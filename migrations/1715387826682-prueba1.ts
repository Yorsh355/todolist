import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba11715387826682 implements MigrationInterface {
    name = 'Prueba11715387826682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_first_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_last_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_ident"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "user_password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_ident" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("user_email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_last_name" text`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_first_name" text NOT NULL`);
    }

}
