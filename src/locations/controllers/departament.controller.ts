import { Controller, Get, Param } from "@nestjs/common"

import { DepartamentService } from "../services"

@Controller("locations/departaments")
export class DepartamentController {
	constructor(private readonly departamentService: DepartamentService) {}

	@Get()
	async findAll() {
		return this.departamentService.findAll()
	}

	@Get(":countryId")
	async findByCountryId(@Param("countryId") countryId: number) {
		return this.departamentService.findByCountryId(countryId)
	}
}
