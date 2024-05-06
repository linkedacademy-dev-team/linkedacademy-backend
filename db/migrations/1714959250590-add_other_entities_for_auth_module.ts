import { MigrationInterface, QueryRunner } from "typeorm"

export class AddOtherEntitiesForAuthModule1714959250590 implements MigrationInterface {
	name = "AddOtherEntitiesForAuthModule1714959250590"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`name\` \`name\` enum ('USERS', 'AUTH', 'COUNTRIES', 'DEPARTMENTS', 'CITIES', 'SCHOOLS', 'DISABILITIES', 'EDUCATION_LEVELS', 'EDUCATION_MODES', 'ETHNIC_GROUPS', 'LANGUAGES', 'SESSIONS', 'SPECIALITIES') NOT NULL`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`name\` \`name\` enum ('USERS', 'AUTH', 'SCHOOLS') NOT NULL`
		)
	}
}
