import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCityCoordinatesField1714941065930 implements MigrationInterface {
    name = 'AddCityCoordinatesField1714941065930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` ADD \`coordinates\` point NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` DROP COLUMN \`coordinates\``);
    }

}
