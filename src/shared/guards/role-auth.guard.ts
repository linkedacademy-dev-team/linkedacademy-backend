import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { Request } from "express"
import { FEATURES } from "src/auth/constants"
import { PermissionService, UserRoleService } from "src/auth/services"

@Injectable()
export class RoleAuthGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly userRoleService: UserRoleService,
		private readonly permissionService: PermissionService
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request: Request = context.switchToHttp().getRequest()
		const authHeader = this.getAuthHeader(request)

		if (!authHeader) throw new UnauthorizedException("Authorization credentials are required")

		const token = authHeader.split(" ")[1]

		const payload = this.jwtService.decode(token)

		if (!payload) throw new UnauthorizedException("Invalid token")

		const userId = payload.sub

		if (!userId) throw new UnauthorizedException("Invalid auth payload")

		const userRoles = await this.userRoleService.getRolesByUserId(userId)

		if (userRoles.length === 0) throw new UnauthorizedException("User has no roles")

		const requestedFeature = this.getRequestedFeature(request)
		const parsedFeature: FEATURES = FEATURES[requestedFeature]

		if (!parsedFeature) throw new UnauthorizedException("Invalid feature requested")

		const roles = userRoles.map((userRole) => userRole.role.id)

		const permissions = await this.permissionService.findByRoles(roles)

		const requestType = this.getRequestType(request)

		return permissions.some((permission) => {
			switch (requestType) {
				case "GET":
					return permission.canRead
				case "POST":
					return permission.canWrite
				case "PUT":
					return permission.canUpdate
				case "DELETE":
					return permission.canDelete
				default:
					return false
			}
		})
	}

	getRequestType(request: Request) {
		return request.method
	}

	getRequestedFeature(request: Request) {
		return request.url.split("/")[2].toUpperCase().trim()
	}

	getAuthHeader(request: Request) {
		return request.headers.authorization
	}
}
