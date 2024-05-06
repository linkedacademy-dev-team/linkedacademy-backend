import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { PublicAuthGuard, RoleAuthGuard } from "src/shared/guards"

import { CreateSpecialityDto } from "../dtos/specialities/create-speciality.dto"
import { UpdateSpecialityDto } from "../dtos/specialities/update-speciality.dto"
import { SpecialityService } from "../services/speciality.service"

@Controller("specialities")
export class SpecialityController {
	constructor(private readonly specialityService: SpecialityService) {}

	@UseGuards(PublicAuthGuard)
	@Get("public")
	async getAllPublic() {
		return this.specialityService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAll() {
		return this.specialityService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async create(@Body() createSpecialityDto: CreateSpecialityDto) {
		await this.specialityService.create(createSpecialityDto)
	}

	@UseGuards(RoleAuthGuard)
	@Put(":id")
	async update(@Param("id") id: number, @Body() updateSpecialityDto: UpdateSpecialityDto) {
		await this.specialityService.update(id, updateSpecialityDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async delete(@Param("id") id: number) {
		await this.specialityService.delete(id)
	}
}
