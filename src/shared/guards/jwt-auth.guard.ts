import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { Request } from "express"

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request: Request = context.switchToHttp().getRequest()
		const authHeader = this.getAuthHeader(request)

		if (!authHeader) throw new UnauthorizedException("Authorization credentials are required")

		const token = authHeader.split(" ")[1]

		const payload = this.jwtService.decode(token)

		if (!payload) throw new UnauthorizedException("Invalid token")

		const userId = payload.sub

		if (!userId) throw new UnauthorizedException("Invalid auth payload")

		request.userId = userId

		return true
	}

	getAuthHeader(request: Request) {
		return request.headers.authorization
	}
}
