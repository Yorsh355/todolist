import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserUpdateDateColumn1719099910405 implements MigrationInterface {
    name = 'ChangeUserUpdateDateColumn1719099910405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_update_date" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_update_date" SET DEFAULT now()`);
    }

}
