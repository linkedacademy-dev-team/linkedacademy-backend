import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBroadcastChannelToUseTables1714608028636 implements MigrationInterface {
    name = 'AddBroadcastChannelToUseTables1714608028636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`title\` varchar(40) NOT NULL, \`content\` text NOT NULL, \`image\` varchar(255) NOT NULL, \`visible\` tinyint NOT NULL DEFAULT 0, \`broadcastChannelId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`broadcast_channel\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`schoolId\` int UNSIGNED NULL, UNIQUE INDEX \`REL_383b9ec428bd05fce44d5c01e0\` (\`schoolId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`broadcast_channel_to_user\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`userId\` int NOT NULL, \`broadcastChannelId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_8021d06d3f5560a80f419ac7e7b\` FOREIGN KEY (\`broadcastChannelId\`) REFERENCES \`broadcast_channel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`broadcast_channel\` ADD CONSTRAINT \`FK_383b9ec428bd05fce44d5c01e05\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`broadcast_channel_to_user\` ADD CONSTRAINT \`FK_e0ed7074741c1f4ed7e9adca99e\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`broadcast_channel_to_user\` ADD CONSTRAINT \`FK_26f47b31c6e829a71433e4bf06a\` FOREIGN KEY (\`broadcastChannelId\`) REFERENCES \`broadcast_channel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`broadcast_channel_to_user\` DROP FOREIGN KEY \`FK_26f47b31c6e829a71433e4bf06a\``);
        await queryRunner.query(`ALTER TABLE \`broadcast_channel_to_user\` DROP FOREIGN KEY \`FK_e0ed7074741c1f4ed7e9adca99e\``);
        await queryRunner.query(`ALTER TABLE \`broadcast_channel\` DROP FOREIGN KEY \`FK_383b9ec428bd05fce44d5c01e05\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_8021d06d3f5560a80f419ac7e7b\``);
        await queryRunner.query(`DROP TABLE \`broadcast_channel_to_user\``);
        await queryRunner.query(`DROP INDEX \`REL_383b9ec428bd05fce44d5c01e0\` ON \`broadcast_channel\``);
        await queryRunner.query(`DROP TABLE \`broadcast_channel\``);
        await queryRunner.query(`DROP TABLE \`post\``);
    }

}
