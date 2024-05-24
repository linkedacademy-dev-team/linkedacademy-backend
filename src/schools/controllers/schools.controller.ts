import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common"
import { PaginationDto } from "src/shared/dtos"
import { JwtAuthGuard, RoleAuthGuard } from "src/shared/guards"

import { CreateSchoolDto } from "../dtos"
import { FilterDashboardSchoolDto } from "../dtos/schools/filter-dashboard-school.dto"
import { FilterSchoolDto } from "../dtos/schools/filter-school.dto"
import { GetSchoolExtraInfoDto } from "../dtos/schools/get-school-extra-info.dto"
import { SchoolsService } from "../services/schools.service"

@Controller("schools")
export class SchoolsController {
	constructor(private readonly schoolsService: SchoolsService) {}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@Put("additional-info/activate-deactivate")
	async activateOrDeactivateSchoolAditionalInfo(
		@Body() getSchoolExtraInfoDto: GetSchoolExtraInfoDto,
		@Query("activate") activate: boolean
	) {
		return this.schoolsService.activateOrDeactivateSchoolAditionalInfo(
			getSchoolExtraInfoDto,
			activate
		)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@Get("additional-info")
	async getSchoolAdditionalInfo(@Query() getSchoolExtraInfoDto: GetSchoolExtraInfoDto) {
		return this.schoolsService.getSchoolAdditionalInfo(getSchoolExtraInfoDto)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@Get(":id")
	async getSchoolById(@Param("id") id: number) {
		return this.schoolsService.getSchoolById(id)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@Get("per-city/:cityId")
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
