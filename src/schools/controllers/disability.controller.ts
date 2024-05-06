import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateDisabilityDto } from "../dtos/disabilities/create-disability.dto"
import { UpdateDisabilityDto } from "../dtos/disabilities/update-disability.dto"
import { DisabilityService } from "../services/disability.service"

@Controller("disabilities")
export class DisabilityController {
	constructor(private readonly disabilityService: DisabilityService) {}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAll() {
		return this.disabilityService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async create(@Body() createDisabilityDto: CreateDisabilityDto) {
		await this.disabilityService.create(createDisabilityDto)
	}

	@UseGuards(RoleAuthGuard)
	@Put(":id")
	async update(@Param("id") id: number, @Body() updateDisabilityDto: UpdateDisabilityDto) {
		await this.disabilityService.update(id, updateDisabilityDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async delete(@Param("id") id: number) {
		await this.disabilityService.delete(id)
	}
}
