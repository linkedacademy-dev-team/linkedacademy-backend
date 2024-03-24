import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDepartamentCityFkRelationships21710976274527 implements MigrationInterface {
    name = 'FixDepartamentCityFkRelationships21710976274527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`departament\` DROP FOREIGN KEY \`FK_93f692ff45d2b272042d6e2e843\``);
        await queryRunner.query(`ALTER TABLE \`departament\` DROP COLUMN \`citiesId\``);
        await queryRunner.query(`ALTER TABLE \`city\` ADD \`departamentId\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` ADD CONSTRAINT \`FK_19117b608c79d30fffff38902be\` FOREIGN KEY (\`departamentId\`) REFERENCES \`departament\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_19117b608c79d30fffff38902be\``);
        await queryRunner.query(`ALTER TABLE \`city\` DROP COLUMN \`departamentId\``);
        await queryRunner.query(`ALTER TABLE \`departament\` ADD \`citiesId\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`departament\` ADD CONSTRAINT \`FK_93f692ff45d2b272042d6e2e843\` FOREIGN KEY (\`citiesId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
