import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveCodeFields1710975930570 implements MigrationInterface {
    name = 'RemoveCodeFields1710975930570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`departament\` DROP COLUMN \`code\``);
        await queryRunner.query(`ALTER TABLE \`city\` DROP COLUMN \`code\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` ADD \`code\` varchar(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`departament\` ADD \`code\` varchar(8) NOT NULL`);
    }

}
