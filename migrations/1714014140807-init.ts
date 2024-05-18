import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1714014140807 implements MigrationInterface {
    name = 'Init1714014140807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_first_name" text NOT NULL, "user_last_name" text, "user_name" text NOT NULL, "user_email" text NOT NULL, "user_ident" numeric NOT NULL, "user_password" text NOT NULL, CONSTRAINT "UQ_d34106f8ec1ebaf66f4f8609dd6" UNIQUE ("user_name"), CONSTRAINT "UQ_65d72a4b8a5fcdad6edee8563b0" UNIQUE ("user_email"), CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
