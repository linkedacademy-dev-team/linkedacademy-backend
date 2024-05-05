import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "src/auth/auth.module"

import { SchoolsController } from "./controllers"
import { School } from "./entities"
import { SchoolsService } from "./services/schools.service"

@Module({
	imports: [TypeOrmModule.forFeature([School]), AuthModule],
	controllers: [SchoolsController],
	providers: [SchoolsService]
})
export class SchoolsModule {}
