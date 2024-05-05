import { MigrationInterface, QueryRunner } from "typeorm"

export class AddSchoolsFeature1714945921792 implements MigrationInterface {
	name = "AddSchoolsFeature1714945921792"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`name\` \`name\` enum ('USERS', 'AUTH', 'SCHOOLS') NOT NULL`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`feature\` CHANGE \`name\` \`name\` enum ('USERS', 'AUTH') NOT NULL`
		)
	}
}
