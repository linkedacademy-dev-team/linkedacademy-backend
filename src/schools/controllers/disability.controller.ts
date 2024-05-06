import { Body, Controller, Param, Post, Put, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateDisabilityDto } from "../dtos/disabilities/create-disability.dto"
import { UpdateDisabilityDto } from "../dtos/disabilities/update-disability.dto"
import { DisabilityService } from "../services/disability.service"

@Controller("schools/disabilities")
export class DisabilityController {
	constructor(private readonly disabilityService: DisabilityService) {}

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
}
