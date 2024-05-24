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

import { CreateEthnicGroupDto } from "../dtos/ethnic-group/create-ethnic-group.dto"
import { UpdateEthnicGroupDto } from "../dtos/ethnic-group/update-ethnic-group.dto"
import { EthnicGroupService } from "../services/ethnic-group.service"

@Controller("ethnic-groups")
export class EthnicGroupController {
	constructor(private readonly ethnicGroupService: EthnicGroupService) {}

	@UseGuards(PublicAuthGuard)
	@Get("public")
	async getAllPublicEthnicGroup() {
		return this.ethnicGroupService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllEthnicGroup() {
		return this.ethnicGroupService.getAll()
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Post()
	async createEthnicGroup(@Body() createEthnicGroupDto: CreateEthnicGroupDto) {
		return this.ethnicGroupService.create(createEthnicGroupDto)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Put(":id")
	async updateEthnicGroup(
		@Param("id") id: number,
		@Body() updateEthnicGroupDto: UpdateEthnicGroupDto
	) {
		return this.ethnicGroupService.update(+id, updateEthnicGroupDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async deleteEthnicGroup(@Param("id") id: number) {
		return this.ethnicGroupService.delete(+id)
	}
}
