import { Body, Controller, Get, Param, Post, Query, UseGuards } from "@nestjs/common"
import { PaginationDto } from "src/shared/dtos"
import { JwtAuthGuard, RoleAuthGuard } from "src/shared/guards"

import { CreateSchoolDto } from "../dtos"
import { FilterDashboardSchoolDto } from "../dtos/schools/filter-dashboard-school.dto"
import { FilterSchoolDto } from "../dtos/schools/filter-school.dto"
import { SchoolsService } from "../services/schools.service"

@Controller("schools")
export class SchoolsController {
	constructor(private readonly schoolsService: SchoolsService) {}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@Get(":cityId")
	async getByCityID(
		@Query() paginationDto: PaginationDto,
		@Query() filterDashboardSchoolDto: FilterDashboardSchoolDto,
		@Param("cityId") cityId: number
	) {
		return this.schoolsService.getByCityID(paginationDto, filterDashboardSchoolDto, cityId)
	}

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
