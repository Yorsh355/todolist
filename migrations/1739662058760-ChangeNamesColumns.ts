import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeNamesColumns1739662058760 implements MigrationInterface {
    name = 'ChangeNamesColumns1739662058760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_758b8ce7c18b9d347461b30228d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_first_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_last_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_ident"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_create_date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_update_date"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "first_name" text`);
        await queryRunner.query(`ALTER TABLE "user" ADD "last_name" text`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" text`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "ident" numeric`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_date" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_create" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_create" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ident"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_update_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_create_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_ident" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("user_email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_last_name" text`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_first_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id")`);
    }

}
