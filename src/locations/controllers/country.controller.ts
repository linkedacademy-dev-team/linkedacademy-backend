import { Controller, Get, HttpStatus, UseGuards } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { PublicAuthGuard } from "src/shared/guards"

import { FindAllCountriesResponseDto } from "../responses"
import { CountryService } from "../services"

@ApiTags("Locations")
@Controller("locations/countries")
export class CountryController {
	constructor(private readonly countryService: CountryService) {}

	@ApiResponse({
		status: HttpStatus.OK,
		type: [FindAllCountriesResponseDto],
		description: "Find all countries"
	})
	@UseGuards(PublicAuthGuard)
	@Get()
	async findAll() {
		return this.countryService.findAll()
	}
}
