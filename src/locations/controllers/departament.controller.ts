import { Controller, Get } from "@nestjs/common"

import { DepartamentService } from "../services"

@Controller("locations/departaments")
export class DepartamentController {
	constructor(private readonly departamentService: DepartamentService) {}

	@Get()
	async findAll() {
		return this.departamentService.findAll()
	}
}
