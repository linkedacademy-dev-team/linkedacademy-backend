import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLocationsEntities1710975027187 implements MigrationInterface {
    name = 'AddLocationsEntities1710975027187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`city\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(40) NOT NULL, \`code\` varchar(8) NOT NULL, \`departamentId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`country\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(40) NOT NULL, \`code\` varchar(8) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`departament\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(40) NOT NULL, \`code\` varchar(8) NOT NULL, \`countryId\` int UNSIGNED NULL, \`citiesId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`city\` ADD CONSTRAINT \`FK_19117b608c79d30fffff38902be\` FOREIGN KEY (\`departamentId\`) REFERENCES \`departament\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`departament\` ADD CONSTRAINT \`FK_e50723a0bc36385b30aad9e18bb\` FOREIGN KEY (\`countryId\`) REFERENCES \`country\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`departament\` ADD CONSTRAINT \`FK_93f692ff45d2b272042d6e2e843\` FOREIGN KEY (\`citiesId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`departament\` DROP FOREIGN KEY \`FK_93f692ff45d2b272042d6e2e843\``);
        await queryRunner.query(`ALTER TABLE \`departament\` DROP FOREIGN KEY \`FK_e50723a0bc36385b30aad9e18bb\``);
        await queryRunner.query(`ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_19117b608c79d30fffff38902be\``);
        await queryRunner.query(`DROP TABLE \`departament\``);
        await queryRunner.query(`DROP TABLE \`country\``);
        await queryRunner.query(`DROP TABLE \`city\``);
    }

}
