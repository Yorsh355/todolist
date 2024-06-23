import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUpdateDateColumnUserNullable1719100105846 implements MigrationInterface {
    name = 'ChangeUpdateDateColumnUserNullable1719100105846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_update_date" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "user_update_date" SET NOT NULL`);
    }

}
