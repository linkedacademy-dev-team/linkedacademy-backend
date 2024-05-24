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

import { CreateEducationModeDto } from "../dtos/education-mode/create-education-mode.dto"
import { UpdateEducationModeDto } from "../dtos/education-mode/update-education-mode.dto"
import { EducationModeService } from "../services/education-mode.service"

@Controller("education-modes")
export class EducationModeController {
	constructor(private readonly educationModeService: EducationModeService) {}

	@UseGuards(PublicAuthGuard)
	@Get("public")
	async getAllPublicEducationMode() {
		return this.educationModeService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllEducationMode() {
		return this.educationModeService.getAll()
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Post()
	async createEducationMode(@Body() createEducationModeDto: CreateEducationModeDto) {
		return this.educationModeService.create(createEducationModeDto)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
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
