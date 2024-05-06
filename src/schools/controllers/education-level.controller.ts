import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateEducationLevelDto } from "../dtos/education-levels/create-education-level.dto"
import { EducationLevelService } from "../services/education-levels.service"

@Controller("education-levels")
export class EducationLevelController {
	constructor(private readonly educationLevelService: EducationLevelService) {}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllEducationLevels() {
		return this.educationLevelService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async createEducationLevel(@Body() createEducationLevelDto: CreateEducationLevelDto) {
		return this.educationLevelService.create(createEducationLevelDto)
	}

	@UseGuards(RoleAuthGuard)
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
