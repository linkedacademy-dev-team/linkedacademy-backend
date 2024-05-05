import { Controller, Get } from "@nestjs/common"

import { PermissionService } from "../services"

@Controller("permissions")
export class PermissionsController {
	constructor(private readonly permissionService: PermissionService) {}

	@Get()
	async getAllPermissions() {
		return this.permissionService.getAllPermissions()
	}
}
