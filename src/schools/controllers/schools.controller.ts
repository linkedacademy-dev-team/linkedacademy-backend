import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateSchoolDto } from "../dtos"
import { FilterSchoolDto } from "../dtos/schools/filter-school.dto"
import { SchoolsService } from "../services/schools.service"

@Controller("schools")
export class SchoolsController {
	constructor(private readonly schoolsService: SchoolsService) {}

	@Get()
	async getFiltered(@Query() filterSchoolDto: FilterSchoolDto) {
		return this.schoolsService.filter(filterSchoolDto)
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async create(@Body() createSchoolDto: CreateSchoolDto): Promise<void> {
		await this.schoolsService.create(createSchoolDto)
	}
}
