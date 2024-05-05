import { Controller, Get, HttpStatus, Param, UseGuards } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { PublicAuthGuard } from "src/shared/guards"

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
	@UseGuards(PublicAuthGuard)
	@Get()
	async findAll() {
		return this.departamentService.findAll()
	}

	@ApiResponse({
		status: HttpStatus.OK,
		description: "Departament's list by country",
		type: [FindDepartamentsByCountryResponseDto]
	})
	@UseGuards(PublicAuthGuard)
	@Get(":countryId")
	async findByCountryId(@Param("countryId") countryId: number) {
		return this.departamentService.findByCountryId(countryId)
	}
}
