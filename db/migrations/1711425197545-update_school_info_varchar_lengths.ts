import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSchoolInfoVarcharLengths1711425197545 implements MigrationInterface {
    name = 'UpdateSchoolInfoVarcharLengths1711425197545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_808b883745bc0ed6c6f5bdea08\` ON \`disability\``);
        await queryRunner.query(`ALTER TABLE \`disability\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`disability\` ADD \`name\` varchar(72) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`idx_disability_name\` ON \`disability\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_1c84617b3b00d8d7b434ca60dd\` ON \`education_levels\``);
        await queryRunner.query(`ALTER TABLE \`education_levels\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`education_levels\` ADD \`name\` varchar(72) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`idx_education_level_name\` ON \`education_levels\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_4ec1cb0c99e101dc3f10ccc855\` ON \`education_model\``);
        await queryRunner.query(`ALTER TABLE \`education_model\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`education_model\` ADD \`name\` varchar(72) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`idx_education_model_name\` ON \`education_model\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_0d2ad2e7ad85339905bacd5848\` ON \`ethnic_group\``);
        await queryRunner.query(`ALTER TABLE \`ethnic_group\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`ethnic_group\` ADD \`name\` varchar(72) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`idx_ethnic_group_name\` ON \`ethnic_group\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_3c6fa28e17c1e4f3b9c8c34acd\` ON \`session\``);
        await queryRunner.query(`ALTER TABLE \`session\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`session\` ADD \`name\` varchar(72) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`idx_session_name\` ON \`session\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_d6343d3917d06d8ef61ec9042e\` ON \`speciality\``);
        await queryRunner.query(`ALTER TABLE \`speciality\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`speciality\` ADD \`name\` varchar(72) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`idx_speciality_name\` ON \`speciality\` (\`name\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_808b883745bc0ed6c6f5bdea08\` ON \`disability\` (\`name\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1c84617b3b00d8d7b434ca60dd\` ON \`education_levels\` (\`name\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_4ec1cb0c99e101dc3f10ccc855\` ON \`education_model\` (\`name\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_0d2ad2e7ad85339905bacd5848\` ON \`ethnic_group\` (\`name\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_3c6fa28e17c1e4f3b9c8c34acd\` ON \`session\` (\`name\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_d6343d3917d06d8ef61ec9042e\` ON \`speciality\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_d6343d3917d06d8ef61ec9042e\` ON \`speciality\``);
        await queryRunner.query(`DROP INDEX \`IDX_3c6fa28e17c1e4f3b9c8c34acd\` ON \`session\``);
        await queryRunner.query(`DROP INDEX \`IDX_0d2ad2e7ad85339905bacd5848\` ON \`ethnic_group\``);
        await queryRunner.query(`DROP INDEX \`IDX_4ec1cb0c99e101dc3f10ccc855\` ON \`education_model\``);
        await queryRunner.query(`DROP INDEX \`IDX_1c84617b3b00d8d7b434ca60dd\` ON \`education_levels\``);
        await queryRunner.query(`DROP INDEX \`IDX_808b883745bc0ed6c6f5bdea08\` ON \`disability\``);
        await queryRunner.query(`DROP INDEX \`idx_speciality_name\` ON \`speciality\``);
        await queryRunner.query(`ALTER TABLE \`speciality\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`speciality\` ADD \`name\` varchar(16) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_d6343d3917d06d8ef61ec9042e\` ON \`speciality\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`idx_session_name\` ON \`session\``);
        await queryRunner.query(`ALTER TABLE \`session\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`session\` ADD \`name\` varchar(16) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_3c6fa28e17c1e4f3b9c8c34acd\` ON \`session\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`idx_ethnic_group_name\` ON \`ethnic_group\``);
        await queryRunner.query(`ALTER TABLE \`ethnic_group\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`ethnic_group\` ADD \`name\` varchar(16) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_0d2ad2e7ad85339905bacd5848\` ON \`ethnic_group\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`idx_education_model_name\` ON \`education_model\``);
        await queryRunner.query(`ALTER TABLE \`education_model\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`education_model\` ADD \`name\` varchar(16) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_4ec1cb0c99e101dc3f10ccc855\` ON \`education_model\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`idx_education_level_name\` ON \`education_levels\``);
        await queryRunner.query(`ALTER TABLE \`education_levels\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`education_levels\` ADD \`name\` varchar(32) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_1c84617b3b00d8d7b434ca60dd\` ON \`education_levels\` (\`name\`)`);
        await queryRunner.query(`DROP INDEX \`idx_disability_name\` ON \`disability\``);
        await queryRunner.query(`ALTER TABLE \`disability\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`disability\` ADD \`name\` varchar(16) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_808b883745bc0ed6c6f5bdea08\` ON \`disability\` (\`name\`)`);
    }

}
