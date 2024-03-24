import { Controller, Get } from "@nestjs/common"

import { CityService } from "../services"

@Controller("locations/cities")
export class CityController {
	constructor(private readonly cityService: CityService) {}

	@Get()
	async findAll() {
		return this.cityService.findAll()
	}
}
