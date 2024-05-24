import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"

import { CreateLogDto } from "./dto/create-log.dto"
import { UpdateLogDto } from "./dto/update-log.dto"
import { LogsService } from "./logs.service"

@Controller("logs")
export class LogsController {
	constructor(private readonly logsService: LogsService) {}

	@Post()
	create(@Body() createLogDto: CreateLogDto) {
		return this.logsService.create(createLogDto)
	}

	@Get()
	findAll() {
		return this.logsService.findAll()
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.logsService.findOne(+id)
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateLogDto: UpdateLogDto) {
		return this.logsService.update(+id, updateLogDto)
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.logsService.remove(+id)
	}
}
