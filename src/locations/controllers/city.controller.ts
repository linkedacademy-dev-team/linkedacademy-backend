import { Controller, Get, HttpStatus, Param, UseGuards } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { PublicAuthGuard } from "src/shared/guards"

import { FindAllCitiesResponseDto, FindCitiesByDepartamentResponseDto } from "../responses"
import { CityService } from "../services"

@ApiTags("Locations")
@Controller("locations/cities")
export class CityController {
	constructor(private readonly cityService: CityService) {}

	@ApiResponse({
		status: HttpStatus.OK,
		type: [FindAllCitiesResponseDto],
		description: "Find all cities"
	})
	@UseGuards(PublicAuthGuard)
	@Get()
	async findAll() {
		return this.cityService.findAll()
	}

	@ApiResponse({
		status: HttpStatus.OK,
		type: [FindCitiesByDepartamentResponseDto],
		description: "Find all cities by department id"
	})
	@UseGuards(PublicAuthGuard)
	@Get(":departmentId")
	async findByDepartmentId(@Param("departmentId") departmentId: number) {
		return this.cityService.findByDepartamentId(departmentId)
	}
}
