import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDepartamentCityFkRelationships1710976128309 implements MigrationInterface {
    name = 'FixDepartamentCityFkRelationships1710976128309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_19117b608c79d30fffff38902be\``);
        await queryRunner.query(`DROP INDEX \`city_departament_id_index\` ON \`city\``);
        await queryRunner.query(`ALTER TABLE \`city\` DROP COLUMN \`departamentId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` ADD \`departamentId\` int UNSIGNED NULL`);
        await queryRunner.query(`CREATE INDEX \`city_departament_id_index\` ON \`city\` (\`departamentId\`)`);
        await queryRunner.query(`ALTER TABLE \`city\` ADD CONSTRAINT \`FK_19117b608c79d30fffff38902be\` FOREIGN KEY (\`departamentId\`) REFERENCES \`departament\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
