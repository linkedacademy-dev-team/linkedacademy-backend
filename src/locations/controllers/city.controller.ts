import { Controller, Get, HttpStatus, Param } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"

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
	@Get()
	async findAll() {
		return this.cityService.findAll()
	}

	@ApiResponse({
		status: HttpStatus.OK,
		type: [FindCitiesByDepartamentResponseDto],
		description: "Find all cities by department id"
	})
	@Get(":departmentId")
	async findByDepartmentId(@Param("departmentId") departmentId: number) {
		return this.cityService.findByDepartamentId(departmentId)
	}
}
