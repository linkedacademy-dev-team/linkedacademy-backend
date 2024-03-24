import { Controller, Get } from "@nestjs/common"

import { CountryService } from "../services"

@Controller("locations/countries")
export class CountryController {
	constructor(private readonly countryService: CountryService) {}

	@Get()
	async findAll() {
		return this.countryService.findAll()
	}
}
