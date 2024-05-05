import { MigrationInterface, QueryRunner } from "typeorm"

export class RemoveUsernameField1714940069581 implements MigrationInterface {
	name = "RemoveUsernameField1714940069581"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(40) NOT NULL`)
	}
}
