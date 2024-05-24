import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { SchoolLogs } from "./entities/school-log.entity"
import { LogsController } from "./logs.controller"
import { LogsService } from "./logs.service"

@Module({
	imports: [TypeOrmModule.forFeature([SchoolLogs])],
	controllers: [LogsController],
	providers: [LogsService]
})
export class LogsModule {}
