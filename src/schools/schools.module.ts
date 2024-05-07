import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "src/auth/auth.module"
import { SharedModule } from "src/shared/shared.module"

import { SchoolsController } from "./controllers"
import { DisabilityController } from "./controllers/disability.controller"
import { EducationModeController } from "./controllers/education.mode.controller"
import { EducationLevelController } from "./controllers/education-level.controller"
import { EthnicGroupController } from "./controllers/ethnic-group.controller"
import { LanguageController } from "./controllers/language.controller"
import { SessionController } from "./controllers/session.controller"
import { SpecialityController } from "./controllers/speciality.controller"
import {
	Disability,
	EducationLevels,
	EducationModel,
	EthnicGroup,
	Language,
	School,
	Session,
	Speciality
} from "./entities"
import { DisabilityService } from "./services/disability.service"
import { EducationLevelService } from "./services/education-levels.service"
import { EducationModeService } from "./services/education-mode.service"
import { EthnicGroupService } from "./services/ethnic-group.service"
import { LanguageService } from "./services/language.service"
import { SchoolsService } from "./services/schools.service"
import { SessionService } from "./services/session.service"
import { SpecialityService } from "./services/speciality.service"

@Module({
	imports: [
		TypeOrmModule.forFeature([
			School,
			Disability,
			EducationLevels,
			EducationModel,
			EthnicGroup,
			Session,
			Speciality,
			Language
		]),
		AuthModule,
		SharedModule
	],
	controllers: [
		SchoolsController,
		DisabilityController,
		EducationLevelController,
		EducationModeController,
		EthnicGroupController,
		LanguageController,
		SessionController,
		SpecialityController
	],
	providers: [
		SchoolsService,
		DisabilityService,
		EducationLevelService,
		EducationModeService,
		EthnicGroupService,
		LanguageService,
		SessionService,
		SpecialityService
	]
})
export class SchoolsModule {}
