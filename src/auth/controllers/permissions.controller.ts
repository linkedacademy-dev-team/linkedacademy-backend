import { Controller, Get, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "src/shared/guards"

import { PermissionService } from "../services"

@Controller("permissions")
export class PermissionsController {
	constructor(private readonly permissionService: PermissionService) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async getAllPermissions() {
		return this.permissionService.getAllPermissions()
	}
}
