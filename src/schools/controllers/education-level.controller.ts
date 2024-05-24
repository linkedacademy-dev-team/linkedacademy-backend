import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
	UseInterceptors
} from "@nestjs/common"
import { JwtAuthGuard, PublicAuthGuard, RoleAuthGuard } from "src/shared/guards"
import { LogGuard } from "src/shared/guards/log.guard"

import { CreateEducationLevelDto } from "../dtos/education-levels/create-education-level.dto"
import { EducationLevelService } from "../services/education-levels.service"

@Controller("education-levels")
export class EducationLevelController {
	constructor(private readonly educationLevelService: EducationLevelService) {}

	@UseGuards(PublicAuthGuard)
	@Get("public")
	async getAllPublicEducationLevels() {
		return this.educationLevelService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllEducationLevels() {
		return this.educationLevelService.getAll()
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Post()
	async createEducationLevel(@Body() createEducationLevelDto: CreateEducationLevelDto) {
		return this.educationLevelService.create(createEducationLevelDto)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Put(":id")
	async updateEducationLevel(
		@Param("id") id: number,
		@Body() updateEducationLevelDto: CreateEducationLevelDto
	) {
		return this.educationLevelService.update(+id, updateEducationLevelDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async deleteEducationLevel(@Param("id") id: number) {
		return this.educationLevelService.delete(+id)
	}
}
