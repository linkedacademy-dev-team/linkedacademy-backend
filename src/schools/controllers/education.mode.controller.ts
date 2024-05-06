import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateEducationModeDto } from "../dtos/education-mode/create-education-mode.dto"
import { UpdateEducationModeDto } from "../dtos/education-mode/update-education-mode.dto"
import { EducationModeService } from "../services/education-mode.service"

@Controller("education-modes")
export class EducationModeController {
	constructor(private readonly educationModeService: EducationModeService) {}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllEducationMode() {
		return this.educationModeService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async createEducationMode(@Body() createEducationModeDto: CreateEducationModeDto) {
		return this.educationModeService.create(createEducationModeDto)
	}

	@UseGuards(RoleAuthGuard)
	@Put(":id")
	async updateEducationMode(
		@Param("id") id: number,
		@Body() updateEducationModeDto: UpdateEducationModeDto
	) {
		return this.educationModeService.update(+id, updateEducationModeDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async deleteEducationLevel(@Param("id") id: number) {
		return this.educationModeService.delete(+id)
	}
}
