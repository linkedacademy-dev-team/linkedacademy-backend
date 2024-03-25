import { Controller, Get, HttpStatus, Param } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"

import { FindAllDepartamentsResponseDto, FindDepartamentsByCountryResponseDto } from "../responses"
import { DepartamentService } from "../services"

@ApiTags("Locations")
@Controller("locations/departaments")
export class DepartamentController {
	constructor(private readonly departamentService: DepartamentService) {}

	@ApiResponse({
		status: HttpStatus.OK,
		description: "Departament's list",
		type: [FindAllDepartamentsResponseDto]
	})
	@Get()
	async findAll() {
		return this.departamentService.findAll()
	}

	@ApiResponse({
		status: HttpStatus.OK,
		description: "Departament's list by country",
		type: [FindDepartamentsByCountryResponseDto]
	})
	@Get(":countryId")
	async findByCountryId(@Param("countryId") countryId: number) {
		return this.departamentService.findByCountryId(countryId)
	}
}
