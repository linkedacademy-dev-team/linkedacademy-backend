import { Controller, Get, Param } from "@nestjs/common"

import { CityService } from "../services"

@Controller("locations/cities")
export class CityController {
	constructor(private readonly cityService: CityService) {}

	@Get()
	async findAll() {
		return this.cityService.findAll()
	}

	@Get(":departmentId")
	async findByDepartmentId(@Param("departmentId") departmentId: number) {
		return this.cityService.findByDepartamentId(departmentId)
	}
}
