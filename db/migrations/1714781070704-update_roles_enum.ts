import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateRolesEnum1714781070704 implements MigrationInterface {
	name = "UpdateRolesEnum1714781070704"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`name\` \`name\` enum ('ATTENDANT', 'SECRETARY_EDUCATION_MEMBER', 'ADMINISTRATOR', 'SCHOOL') NOT NULL`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`role\` CHANGE \`name\` \`name\` enum ('FAMILY_PARENT', 'ADMINISTRATOR', 'SCHOOL') NOT NULL`
		)
	}
}
