import { Controller, Get, Param, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "src/shared/guards"

import { RoleService } from "../services"

@Controller("roles")
export class RolesController {
	constructor(private readonly roleService: RoleService) {}

	@UseGuards(JwtAuthGuard)
	@Get("user/:userId")
	async getAllRoles(@Param("userId") userId: number) {
		return this.roleService.getUserRoles(+userId)
	}
}
