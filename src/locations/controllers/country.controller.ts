import { Controller, Get, HttpStatus } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"

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
	@Get()
	async findAll() {
		return this.countryService.findAll()
	}
}
