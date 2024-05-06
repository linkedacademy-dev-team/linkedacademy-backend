import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { PublicAuthGuard, RoleAuthGuard } from "src/shared/guards"

import { CreateSessionDto } from "../dtos/sessions/create-session.dto"
import { UpdateSessionDto } from "../dtos/sessions/update-sessions.dto"
import { SessionService } from "../services/session.service"

@Controller("sessions")
export class SessionController {
	constructor(private readonly sessionService: SessionService) {}

	@UseGuards(PublicAuthGuard)
	@Get("public")
	async getAllPublic() {
		return this.sessionService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAll() {
		return this.sessionService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async create(@Body() createSessionDto: CreateSessionDto) {
		await this.sessionService.create(createSessionDto)
	}

	@UseGuards(RoleAuthGuard)
	@Put(":id")
	async update(@Param("id") id: number, @Body() updateSessionDto: UpdateSessionDto) {
		await this.sessionService.update(id, updateSessionDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async delete(@Param("id") id: number) {
		await this.sessionService.delete(id)
	}
}
