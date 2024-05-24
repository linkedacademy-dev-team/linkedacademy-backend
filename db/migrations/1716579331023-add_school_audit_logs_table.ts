import { MigrationInterface, QueryRunner } from "typeorm"

export class AddSchoolAuditLogsTable1716579331023 implements MigrationInterface {
	name = "AddSchoolAuditLogsTable1716579331023"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`school_logs\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`entity\` varchar(255) NOT NULL, \`entityId\` int NOT NULL, \`action\` varchar(255) NOT NULL, \`userId\` int NOT NULL, \`old\` json NULL, \`new\` json NULL, \`timestamp\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE \`school_logs\``)
	}
}
