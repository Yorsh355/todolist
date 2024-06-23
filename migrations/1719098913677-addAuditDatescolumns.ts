import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAuditDatescolumns1719098913677 implements MigrationInterface {
    name = 'AddAuditDatescolumns1719098913677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "user_create_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_update_date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_update_date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_create_date"`);
    }

}
