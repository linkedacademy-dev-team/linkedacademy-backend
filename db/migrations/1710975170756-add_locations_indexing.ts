import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLocationsIndexing1710975170756 implements MigrationInterface {
    name = 'AddLocationsIndexing1710975170756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX \`city_departament_id_index\` ON \`city\` (\`departamentId\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`city_departament_id_index\` ON \`city\``);
    }

}
