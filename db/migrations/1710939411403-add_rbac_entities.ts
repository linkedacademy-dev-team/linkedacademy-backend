import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRbacEntities1710939411403 implements MigrationInterface {
    name = 'AddRbacEntities1710939411403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`feature\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` enum ('USERS', 'AUTH') NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`permission\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`canWrite\` tinyint NOT NULL DEFAULT 0, \`canRead\` tinyint NOT NULL DEFAULT 0, \`canUpdate\` tinyint NOT NULL DEFAULT 0, \`canDelete\` tinyint NOT NULL DEFAULT 0, \`roleId\` int UNSIGNED NULL, \`featureId\` int UNSIGNED NULL, INDEX \`idx_permission_role\` (\`roleId\`), INDEX \`idx_permission_feature\` (\`featureId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` enum ('FAMILY_PARENT', 'ADMINISTRATOR', 'SCHOOL') NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_to_role\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`userId\` int UNSIGNED NULL, \`roleId\` int UNSIGNED NULL, INDEX \`idx_user_role_user\` (\`userId\`), INDEX \`idx_user_role_role\` (\`roleId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`firstName\` varchar(40) NOT NULL, \`lastName\` varchar(40) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 0, \`username\` varchar(40) NOT NULL, \`email\` varchar(40) NOT NULL, \`password\` varchar(255) NOT NULL, \`coordinates\` point NULL, \`lastLogin\` timestamp NULL, INDEX \`idx_user_first_name\` (\`firstName\`), INDEX \`idx_user_last_name\` (\`lastName\`), INDEX \`idx_user_status\` (\`status\`), INDEX \`idx_user_username\` (\`username\`), INDEX \`idx_user_email\` (\`email\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_cdb4db95384a1cf7a837c4c683e\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_d5660ed7086e3991e4a292275e8\` FOREIGN KEY (\`featureId\`) REFERENCES \`feature\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_to_role\` ADD CONSTRAINT \`FK_4fe0cc5d2434f7d04fda5cabbc1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_to_role\` ADD CONSTRAINT \`FK_188d9731545949fd835898b71cf\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_to_role\` DROP FOREIGN KEY \`FK_188d9731545949fd835898b71cf\``);
        await queryRunner.query(`ALTER TABLE \`user_to_role\` DROP FOREIGN KEY \`FK_4fe0cc5d2434f7d04fda5cabbc1\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_d5660ed7086e3991e4a292275e8\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_cdb4db95384a1cf7a837c4c683e\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_email\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_username\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_status\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_last_name\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_first_name\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`idx_user_role_role\` ON \`user_to_role\``);
        await queryRunner.query(`DROP INDEX \`idx_user_role_user\` ON \`user_to_role\``);
        await queryRunner.query(`DROP TABLE \`user_to_role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP INDEX \`idx_permission_feature\` ON \`permission\``);
        await queryRunner.query(`DROP INDEX \`idx_permission_role\` ON \`permission\``);
        await queryRunner.query(`DROP TABLE \`permission\``);
        await queryRunner.query(`DROP TABLE \`feature\``);
    }

}
