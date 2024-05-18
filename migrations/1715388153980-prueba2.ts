import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba21715388153980 implements MigrationInterface {
    name = 'Prueba21715388153980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "user_first_name" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_first_name"`);
    }

}
