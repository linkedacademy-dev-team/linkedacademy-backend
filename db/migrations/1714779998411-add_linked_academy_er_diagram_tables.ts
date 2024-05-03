import { MigrationInterface, QueryRunner } from "typeorm"

export class AddLinkedAcademyErDiagramTables1714779998411 implements MigrationInterface {
	name = "AddLinkedAcademyErDiagramTables1714779998411"

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`feature\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` enum ('USERS', 'AUTH') NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`permission\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`canWrite\` tinyint NOT NULL DEFAULT 0, \`canRead\` tinyint NOT NULL DEFAULT 0, \`canUpdate\` tinyint NOT NULL DEFAULT 0, \`canDelete\` tinyint NOT NULL DEFAULT 0, \`roleId\` int UNSIGNED NULL, \`featureId\` int UNSIGNED NULL, INDEX \`idx_permission_role\` (\`roleId\`), INDEX \`idx_permission_feature\` (\`featureId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`role\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` enum ('FAMILY_PARENT', 'ADMINISTRATOR', 'SCHOOL') NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`user_to_role\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`userId\` int UNSIGNED NULL, \`roleId\` int UNSIGNED NULL, INDEX \`idx_user_role_user\` (\`userId\`), INDEX \`idx_user_role_role\` (\`roleId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`disability\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(72) NOT NULL, INDEX \`idx_disability_name\` (\`name\`), UNIQUE INDEX \`IDX_808b883745bc0ed6c6f5bdea08\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`education_levels\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(72) NOT NULL, INDEX \`idx_education_level_name\` (\`name\`), UNIQUE INDEX \`IDX_1c84617b3b00d8d7b434ca60dd\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`education_model\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(72) NOT NULL, INDEX \`idx_education_model_name\` (\`name\`), UNIQUE INDEX \`IDX_4ec1cb0c99e101dc3f10ccc855\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`ethnic_group\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(72) NOT NULL, INDEX \`idx_ethnic_group_name\` (\`name\`), UNIQUE INDEX \`IDX_0d2ad2e7ad85339905bacd5848\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`language\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(16) NOT NULL, INDEX \`idx_language_name\` (\`name\`), UNIQUE INDEX \`IDX_7df7d1e250ea2a416f078a631f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`country\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(40) NOT NULL, \`code\` varchar(8) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`departament\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(40) NOT NULL, \`countryId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`city\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(40) NOT NULL, \`departamentId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`session\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(72) NOT NULL, INDEX \`idx_session_name\` (\`name\`), UNIQUE INDEX \`IDX_3c6fa28e17c1e4f3b9c8c34acd\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`speciality\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(72) NOT NULL, INDEX \`idx_speciality_name\` (\`name\`), UNIQUE INDEX \`IDX_d6343d3917d06d8ef61ec9042e\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(255) NOT NULL, \`logo\` varchar(255) NULL, \`coordinates\` point NULL, \`email\` varchar(255) NULL, \`owner\` varchar(72) NULL, \`address\` varchar(64) NULL, \`phone\` varchar(16) NULL, \`zone\` enum ('Urbana', 'Rural') NULL, \`schedule\` enum ('A', 'B') NULL, \`gender\` enum ('Femenino', 'Masculino', 'Mixto') NULL, \`type\` enum ('Institución Educativa', 'Centro Educativo') NULL, \`minBudget\` decimal(6,2) UNSIGNED NULL, \`maxBudget\` decimal(6,2) UNSIGNED NULL, \`studentsPerClass\` float NULL, \`withLaboratories\` tinyint NULL DEFAULT 0, \`withLibrary\` tinyint NULL DEFAULT 0, \`withInternet\` tinyint NULL DEFAULT 0, \`withSoccerField\` tinyint NULL DEFAULT 0, \`withVolleyballField\` tinyint NULL DEFAULT 0, \`withBasketballField\` tinyint NULL DEFAULT 0, \`withSwimmingPool\` tinyint NULL DEFAULT 0, \`withComputerLab\` tinyint NULL DEFAULT 0, \`withTransport\` tinyint NULL DEFAULT 0, \`withRestaurant\` tinyint NULL DEFAULT 0, \`withAuditorium\` tinyint NULL DEFAULT 0, \`withSnackArea\` tinyint NULL DEFAULT 0, \`schoolParentId\` int UNSIGNED NULL, \`cityId\` int UNSIGNED NULL, INDEX \`idx_school_name\` (\`name\`), INDEX \`idx_school_email\` (\`email\`), INDEX \`idx_school_zone\` (\`zone\`), INDEX \`idx_school_schedule\` (\`schedule\`), INDEX \`idx_school_gender\` (\`gender\`), INDEX \`idx_school_type\` (\`type\`), INDEX \`idx_school_min_budget\` (\`minBudget\`), INDEX \`idx_school_max_budget\` (\`maxBudget\`), INDEX \`idx_school_with_laboratories\` (\`withLaboratories\`), INDEX \`idx_school_with_library\` (\`withLibrary\`), INDEX \`idx_school_with_internet\` (\`withInternet\`), INDEX \`idx_school_with_soccer_field\` (\`withSoccerField\`), INDEX \`idx_school_with_volleyball_field\` (\`withVolleyballField\`), INDEX \`idx_school_with_basketball_field\` (\`withBasketballField\`), INDEX \`idx_school_with_swimming_pool\` (\`withSwimmingPool\`), INDEX \`idx_school_with_computer_lab\` (\`withComputerLab\`), INDEX \`idx_school_with_transport\` (\`withTransport\`), INDEX \`idx_school_with_restaurant\` (\`withRestaurant\`), INDEX \`idx_school_with_auditorium\` (\`withAuditorium\`), INDEX \`idx_school_with_snack_area\` (\`withSnackArea\`), UNIQUE INDEX \`IDX_73c2a2b94ffa6b0fabf50b6474\` (\`name\`), UNIQUE INDEX \`IDX_51e79300bff25fea298af62c43\` (\`email\`), UNIQUE INDEX \`IDX_634c8c14f16a81bd83b46b6663\` (\`phone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`post\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`title\` varchar(40) NOT NULL, \`content\` text NOT NULL, \`image\` varchar(255) NOT NULL, \`visible\` tinyint NOT NULL DEFAULT 0, \`broadcastChannelId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`broadcast_channel\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`schoolId\` int UNSIGNED NULL, UNIQUE INDEX \`REL_383b9ec428bd05fce44d5c01e0\` (\`schoolId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`user\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`firstName\` varchar(40) NOT NULL, \`lastName\` varchar(40) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 0, \`username\` varchar(40) NOT NULL, \`email\` varchar(40) NOT NULL, \`password\` varchar(255) NOT NULL, \`coordinates\` point NULL, \`lastLogin\` timestamp NULL, \`cityId\` int UNSIGNED NULL, \`schoolId\` int UNSIGNED NULL, INDEX \`idx_user_first_name\` (\`firstName\`), INDEX \`idx_user_last_name\` (\`lastName\`), INDEX \`idx_user_status\` (\`status\`), INDEX \`idx_user_username\` (\`username\`), INDEX \`idx_user_email\` (\`email\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_languages_language\` (\`schoolId\` int UNSIGNED NOT NULL, \`languageId\` int UNSIGNED NOT NULL, INDEX \`IDX_e2e7005c3d082aa9ff4c6447e5\` (\`schoolId\`), INDEX \`IDX_a8244747d828cf00003c9775e3\` (\`languageId\`), PRIMARY KEY (\`schoolId\`, \`languageId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_specialities_speciality\` (\`schoolId\` int UNSIGNED NOT NULL, \`specialityId\` int UNSIGNED NOT NULL, INDEX \`IDX_8bbe65cc913b015ee264fc5efa\` (\`schoolId\`), INDEX \`IDX_818aee05ae15cbc9f1aba1e02b\` (\`specialityId\`), PRIMARY KEY (\`schoolId\`, \`specialityId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_education_levels_education_levels\` (\`schoolId\` int UNSIGNED NOT NULL, \`educationLevelsId\` int UNSIGNED NOT NULL, INDEX \`IDX_f3f15deed1f2a6e7ee6f6c4df0\` (\`schoolId\`), INDEX \`IDX_f9b93298522621aa37ff35e89a\` (\`educationLevelsId\`), PRIMARY KEY (\`schoolId\`, \`educationLevelsId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_sessions_session\` (\`schoolId\` int UNSIGNED NOT NULL, \`sessionId\` int UNSIGNED NOT NULL, INDEX \`IDX_5c65ee0e5e964b0771069bf9e4\` (\`schoolId\`), INDEX \`IDX_3869d445666925ff08023fb1ee\` (\`sessionId\`), PRIMARY KEY (\`schoolId\`, \`sessionId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_disabilities_disability\` (\`schoolId\` int UNSIGNED NOT NULL, \`disabilityId\` int UNSIGNED NOT NULL, INDEX \`IDX_5cd8e5087d876580cc7b788d20\` (\`schoolId\`), INDEX \`IDX_a669f50dced23f0ab7743f5d82\` (\`disabilityId\`), PRIMARY KEY (\`schoolId\`, \`disabilityId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_education_models_education_model\` (\`schoolId\` int UNSIGNED NOT NULL, \`educationModelId\` int UNSIGNED NOT NULL, INDEX \`IDX_0b550a670e1cc3c9a66694ab99\` (\`schoolId\`), INDEX \`IDX_cf64039be079c7d3a98160182d\` (\`educationModelId\`), PRIMARY KEY (\`schoolId\`, \`educationModelId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`school_ethnic_groups_ethnic_group\` (\`schoolId\` int UNSIGNED NOT NULL, \`ethnicGroupId\` int UNSIGNED NOT NULL, INDEX \`IDX_63e2e59edfa4305a910f633069\` (\`schoolId\`), INDEX \`IDX_d739ce7ce89fdc284c8d3266e9\` (\`ethnicGroupId\`), PRIMARY KEY (\`schoolId\`, \`ethnicGroupId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`CREATE TABLE \`user_broadcast_channels_broadcast_channel\` (\`userId\` int UNSIGNED NOT NULL, \`broadcastChannelId\` int UNSIGNED NOT NULL, INDEX \`IDX_4eacd5d5a7b1624429b96489e4\` (\`userId\`), INDEX \`IDX_ad46a14f55dde49c95220b92f3\` (\`broadcastChannelId\`), PRIMARY KEY (\`userId\`, \`broadcastChannelId\`)) ENGINE=InnoDB`
		)
		await queryRunner.query(
			`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_cdb4db95384a1cf7a837c4c683e\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`permission\` ADD CONSTRAINT \`FK_d5660ed7086e3991e4a292275e8\` FOREIGN KEY (\`featureId\`) REFERENCES \`feature\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`user_to_role\` ADD CONSTRAINT \`FK_4fe0cc5d2434f7d04fda5cabbc1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`user_to_role\` ADD CONSTRAINT \`FK_188d9731545949fd835898b71cf\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`departament\` ADD CONSTRAINT \`FK_e50723a0bc36385b30aad9e18bb\` FOREIGN KEY (\`countryId\`) REFERENCES \`country\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`city\` ADD CONSTRAINT \`FK_19117b608c79d30fffff38902be\` FOREIGN KEY (\`departamentId\`) REFERENCES \`departament\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`school\` ADD CONSTRAINT \`FK_e661bd65b736be244448bffadb8\` FOREIGN KEY (\`schoolParentId\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`school\` ADD CONSTRAINT \`FK_b1bdd3b3aea568c09b53dea8b26\` FOREIGN KEY (\`cityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_8021d06d3f5560a80f419ac7e7b\` FOREIGN KEY (\`broadcastChannelId\`) REFERENCES \`broadcast_channel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`broadcast_channel\` ADD CONSTRAINT \`FK_383b9ec428bd05fce44d5c01e05\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_beb5846554bec348f6baf449e83\` FOREIGN KEY (\`cityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_709e51110daa2b560f0fc32367b\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_languages_language\` ADD CONSTRAINT \`FK_e2e7005c3d082aa9ff4c6447e56\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_languages_language\` ADD CONSTRAINT \`FK_a8244747d828cf00003c9775e35\` FOREIGN KEY (\`languageId\`) REFERENCES \`language\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_specialities_speciality\` ADD CONSTRAINT \`FK_8bbe65cc913b015ee264fc5efaa\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_specialities_speciality\` ADD CONSTRAINT \`FK_818aee05ae15cbc9f1aba1e02b5\` FOREIGN KEY (\`specialityId\`) REFERENCES \`speciality\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_levels_education_levels\` ADD CONSTRAINT \`FK_f3f15deed1f2a6e7ee6f6c4df00\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_levels_education_levels\` ADD CONSTRAINT \`FK_f9b93298522621aa37ff35e89ac\` FOREIGN KEY (\`educationLevelsId\`) REFERENCES \`education_levels\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_sessions_session\` ADD CONSTRAINT \`FK_5c65ee0e5e964b0771069bf9e4b\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_sessions_session\` ADD CONSTRAINT \`FK_3869d445666925ff08023fb1ee4\` FOREIGN KEY (\`sessionId\`) REFERENCES \`session\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_disabilities_disability\` ADD CONSTRAINT \`FK_5cd8e5087d876580cc7b788d207\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_disabilities_disability\` ADD CONSTRAINT \`FK_a669f50dced23f0ab7743f5d823\` FOREIGN KEY (\`disabilityId\`) REFERENCES \`disability\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_models_education_model\` ADD CONSTRAINT \`FK_0b550a670e1cc3c9a66694ab997\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_models_education_model\` ADD CONSTRAINT \`FK_cf64039be079c7d3a98160182d0\` FOREIGN KEY (\`educationModelId\`) REFERENCES \`education_model\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_ethnic_groups_ethnic_group\` ADD CONSTRAINT \`FK_63e2e59edfa4305a910f6330694\` FOREIGN KEY (\`schoolId\`) REFERENCES \`school\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`school_ethnic_groups_ethnic_group\` ADD CONSTRAINT \`FK_d739ce7ce89fdc284c8d3266e99\` FOREIGN KEY (\`ethnicGroupId\`) REFERENCES \`ethnic_group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`user_broadcast_channels_broadcast_channel\` ADD CONSTRAINT \`FK_4eacd5d5a7b1624429b96489e45\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
		await queryRunner.query(
			`ALTER TABLE \`user_broadcast_channels_broadcast_channel\` ADD CONSTRAINT \`FK_ad46a14f55dde49c95220b92f35\` FOREIGN KEY (\`broadcastChannelId\`) REFERENCES \`broadcast_channel\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`user_broadcast_channels_broadcast_channel\` DROP FOREIGN KEY \`FK_ad46a14f55dde49c95220b92f35\``
		)
		await queryRunner.query(
			`ALTER TABLE \`user_broadcast_channels_broadcast_channel\` DROP FOREIGN KEY \`FK_4eacd5d5a7b1624429b96489e45\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_ethnic_groups_ethnic_group\` DROP FOREIGN KEY \`FK_d739ce7ce89fdc284c8d3266e99\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_ethnic_groups_ethnic_group\` DROP FOREIGN KEY \`FK_63e2e59edfa4305a910f6330694\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_models_education_model\` DROP FOREIGN KEY \`FK_cf64039be079c7d3a98160182d0\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_models_education_model\` DROP FOREIGN KEY \`FK_0b550a670e1cc3c9a66694ab997\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_disabilities_disability\` DROP FOREIGN KEY \`FK_a669f50dced23f0ab7743f5d823\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_disabilities_disability\` DROP FOREIGN KEY \`FK_5cd8e5087d876580cc7b788d207\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_sessions_session\` DROP FOREIGN KEY \`FK_3869d445666925ff08023fb1ee4\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_sessions_session\` DROP FOREIGN KEY \`FK_5c65ee0e5e964b0771069bf9e4b\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_levels_education_levels\` DROP FOREIGN KEY \`FK_f9b93298522621aa37ff35e89ac\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_education_levels_education_levels\` DROP FOREIGN KEY \`FK_f3f15deed1f2a6e7ee6f6c4df00\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_specialities_speciality\` DROP FOREIGN KEY \`FK_818aee05ae15cbc9f1aba1e02b5\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_specialities_speciality\` DROP FOREIGN KEY \`FK_8bbe65cc913b015ee264fc5efaa\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_languages_language\` DROP FOREIGN KEY \`FK_a8244747d828cf00003c9775e35\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school_languages_language\` DROP FOREIGN KEY \`FK_e2e7005c3d082aa9ff4c6447e56\``
		)
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_709e51110daa2b560f0fc32367b\``
		)
		await queryRunner.query(
			`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_beb5846554bec348f6baf449e83\``
		)
		await queryRunner.query(
			`ALTER TABLE \`broadcast_channel\` DROP FOREIGN KEY \`FK_383b9ec428bd05fce44d5c01e05\``
		)
		await queryRunner.query(
			`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_8021d06d3f5560a80f419ac7e7b\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school\` DROP FOREIGN KEY \`FK_b1bdd3b3aea568c09b53dea8b26\``
		)
		await queryRunner.query(
			`ALTER TABLE \`school\` DROP FOREIGN KEY \`FK_e661bd65b736be244448bffadb8\``
		)
		await queryRunner.query(
			`ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_19117b608c79d30fffff38902be\``
		)
		await queryRunner.query(
			`ALTER TABLE \`departament\` DROP FOREIGN KEY \`FK_e50723a0bc36385b30aad9e18bb\``
		)
		await queryRunner.query(
			`ALTER TABLE \`user_to_role\` DROP FOREIGN KEY \`FK_188d9731545949fd835898b71cf\``
		)
		await queryRunner.query(
			`ALTER TABLE \`user_to_role\` DROP FOREIGN KEY \`FK_4fe0cc5d2434f7d04fda5cabbc1\``
		)
		await queryRunner.query(
			`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_d5660ed7086e3991e4a292275e8\``
		)
		await queryRunner.query(
			`ALTER TABLE \`permission\` DROP FOREIGN KEY \`FK_cdb4db95384a1cf7a837c4c683e\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_ad46a14f55dde49c95220b92f3\` ON \`user_broadcast_channels_broadcast_channel\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_4eacd5d5a7b1624429b96489e4\` ON \`user_broadcast_channels_broadcast_channel\``
		)
		await queryRunner.query(`DROP TABLE \`user_broadcast_channels_broadcast_channel\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_d739ce7ce89fdc284c8d3266e9\` ON \`school_ethnic_groups_ethnic_group\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_63e2e59edfa4305a910f633069\` ON \`school_ethnic_groups_ethnic_group\``
		)
		await queryRunner.query(`DROP TABLE \`school_ethnic_groups_ethnic_group\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_cf64039be079c7d3a98160182d\` ON \`school_education_models_education_model\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_0b550a670e1cc3c9a66694ab99\` ON \`school_education_models_education_model\``
		)
		await queryRunner.query(`DROP TABLE \`school_education_models_education_model\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_a669f50dced23f0ab7743f5d82\` ON \`school_disabilities_disability\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_5cd8e5087d876580cc7b788d20\` ON \`school_disabilities_disability\``
		)
		await queryRunner.query(`DROP TABLE \`school_disabilities_disability\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_3869d445666925ff08023fb1ee\` ON \`school_sessions_session\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_5c65ee0e5e964b0771069bf9e4\` ON \`school_sessions_session\``
		)
		await queryRunner.query(`DROP TABLE \`school_sessions_session\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_f9b93298522621aa37ff35e89a\` ON \`school_education_levels_education_levels\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_f3f15deed1f2a6e7ee6f6c4df0\` ON \`school_education_levels_education_levels\``
		)
		await queryRunner.query(`DROP TABLE \`school_education_levels_education_levels\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_818aee05ae15cbc9f1aba1e02b\` ON \`school_specialities_speciality\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_8bbe65cc913b015ee264fc5efa\` ON \`school_specialities_speciality\``
		)
		await queryRunner.query(`DROP TABLE \`school_specialities_speciality\``)
		await queryRunner.query(
			`DROP INDEX \`IDX_a8244747d828cf00003c9775e3\` ON \`school_languages_language\``
		)
		await queryRunner.query(
			`DROP INDEX \`IDX_e2e7005c3d082aa9ff4c6447e5\` ON \`school_languages_language\``
		)
		await queryRunner.query(`DROP TABLE \`school_languages_language\``)
		await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``)
		await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``)
		await queryRunner.query(`DROP INDEX \`idx_user_email\` ON \`user\``)
		await queryRunner.query(`DROP INDEX \`idx_user_username\` ON \`user\``)
		await queryRunner.query(`DROP INDEX \`idx_user_status\` ON \`user\``)
		await queryRunner.query(`DROP INDEX \`idx_user_last_name\` ON \`user\``)
		await queryRunner.query(`DROP INDEX \`idx_user_first_name\` ON \`user\``)
		await queryRunner.query(`DROP TABLE \`user\``)
		await queryRunner.query(
			`DROP INDEX \`REL_383b9ec428bd05fce44d5c01e0\` ON \`broadcast_channel\``
		)
		await queryRunner.query(`DROP TABLE \`broadcast_channel\``)
		await queryRunner.query(`DROP TABLE \`post\``)
		await queryRunner.query(`DROP INDEX \`IDX_634c8c14f16a81bd83b46b6663\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`IDX_51e79300bff25fea298af62c43\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`IDX_73c2a2b94ffa6b0fabf50b6474\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_snack_area\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_auditorium\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_restaurant\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_transport\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_computer_lab\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_swimming_pool\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_basketball_field\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_volleyball_field\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_soccer_field\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_internet\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_library\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_with_laboratories\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_max_budget\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_min_budget\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_type\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_gender\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_schedule\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_zone\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_email\` ON \`school\``)
		await queryRunner.query(`DROP INDEX \`idx_school_name\` ON \`school\``)
		await queryRunner.query(`DROP TABLE \`school\``)
		await queryRunner.query(`DROP INDEX \`IDX_d6343d3917d06d8ef61ec9042e\` ON \`speciality\``)
		await queryRunner.query(`DROP INDEX \`idx_speciality_name\` ON \`speciality\``)
		await queryRunner.query(`DROP TABLE \`speciality\``)
		await queryRunner.query(`DROP INDEX \`IDX_3c6fa28e17c1e4f3b9c8c34acd\` ON \`session\``)
		await queryRunner.query(`DROP INDEX \`idx_session_name\` ON \`session\``)
		await queryRunner.query(`DROP TABLE \`session\``)
		await queryRunner.query(`DROP TABLE \`city\``)
		await queryRunner.query(`DROP TABLE \`departament\``)
		await queryRunner.query(`DROP TABLE \`country\``)
		await queryRunner.query(`DROP INDEX \`IDX_7df7d1e250ea2a416f078a631f\` ON \`language\``)
		await queryRunner.query(`DROP INDEX \`idx_language_name\` ON \`language\``)
		await queryRunner.query(`DROP TABLE \`language\``)
		await queryRunner.query(`DROP INDEX \`IDX_0d2ad2e7ad85339905bacd5848\` ON \`ethnic_group\``)
		await queryRunner.query(`DROP INDEX \`idx_ethnic_group_name\` ON \`ethnic_group\``)
		await queryRunner.query(`DROP TABLE \`ethnic_group\``)
		await queryRunner.query(`DROP INDEX \`IDX_4ec1cb0c99e101dc3f10ccc855\` ON \`education_model\``)
		await queryRunner.query(`DROP INDEX \`idx_education_model_name\` ON \`education_model\``)
		await queryRunner.query(`DROP TABLE \`education_model\``)
		await queryRunner.query(`DROP INDEX \`IDX_1c84617b3b00d8d7b434ca60dd\` ON \`education_levels\``)
		await queryRunner.query(`DROP INDEX \`idx_education_level_name\` ON \`education_levels\``)
		await queryRunner.query(`DROP TABLE \`education_levels\``)
		await queryRunner.query(`DROP INDEX \`IDX_808b883745bc0ed6c6f5bdea08\` ON \`disability\``)
		await queryRunner.query(`DROP INDEX \`idx_disability_name\` ON \`disability\``)
		await queryRunner.query(`DROP TABLE \`disability\``)
		await queryRunner.query(`DROP INDEX \`idx_user_role_role\` ON \`user_to_role\``)
		await queryRunner.query(`DROP INDEX \`idx_user_role_user\` ON \`user_to_role\``)
		await queryRunner.query(`DROP TABLE \`user_to_role\``)
		await queryRunner.query(`DROP TABLE \`role\``)
		await queryRunner.query(`DROP INDEX \`idx_permission_feature\` ON \`permission\``)
		await queryRunner.query(`DROP INDEX \`idx_permission_role\` ON \`permission\``)
		await queryRunner.query(`DROP TABLE \`permission\``)
		await queryRunner.query(`DROP TABLE \`feature\``)
	}
}
