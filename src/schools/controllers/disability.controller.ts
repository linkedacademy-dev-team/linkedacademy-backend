import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
	UseInterceptors
} from "@nestjs/common"
import { JwtAuthGuard, PublicAuthGuard, RoleAuthGuard } from "src/shared/guards"
import { LogGuard } from "src/shared/guards/log.guard"

import { CreateDisabilityDto } from "../dtos/disabilities/create-disability.dto"
import { UpdateDisabilityDto } from "../dtos/disabilities/update-disability.dto"
import { DisabilityService } from "../services/disability.service"

@Controller("disabilities")
export class DisabilityController {
	constructor(private readonly disabilityService: DisabilityService) {}

	@Get("public")
	@UseGuards(PublicAuthGuard)
	async getAllPublic() {
		return this.disabilityService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAll() {
		return this.disabilityService.getAll()
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Post()
	async create(@Body() createDisabilityDto: CreateDisabilityDto) {
		await this.disabilityService.create(createDisabilityDto)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
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
