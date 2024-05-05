import { Body, Controller, Post, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateSchoolDto } from "../dtos"
import { SchoolsService } from "../services/schools.service"

@Controller("schools")
export class SchoolsController {
	constructor(private readonly schoolsService: SchoolsService) {}

	@UseGuards(RoleAuthGuard)
	@Post()
	async create(@Body() createSchoolDto: CreateSchoolDto): Promise<void> {
		await this.schoolsService.create(createSchoolDto)
	}
}
