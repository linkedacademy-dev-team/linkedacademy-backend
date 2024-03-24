import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCityFieldToUser1710976856344 implements MigrationInterface {
    name = 'AddCityFieldToUser1710976856344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`cityId\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_beb5846554bec348f6baf449e83\` FOREIGN KEY (\`cityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_beb5846554bec348f6baf449e83\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`cityId\``);
    }

}
