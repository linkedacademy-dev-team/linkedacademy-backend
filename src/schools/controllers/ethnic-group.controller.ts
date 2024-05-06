import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateEthnicGroupDto } from "../dtos/ethnic-group/create-ethnic-group.dto"
import { UpdateEthnicGroupDto } from "../dtos/ethnic-group/update-ethnic-group.dto"
import { EthnicGroupService } from "../services/ethnic-group.service"

@Controller("ethnic-groups")
export class EthnicGroupController {
	constructor(private readonly ethnicGroupService: EthnicGroupService) {}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllEthnicGroup() {
		return this.ethnicGroupService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async createEthnicGroup(@Body() createEthnicGroupDto: CreateEthnicGroupDto) {
		return this.ethnicGroupService.create(createEthnicGroupDto)
	}

	@UseGuards(RoleAuthGuard)
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
