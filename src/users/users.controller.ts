import { Controller, Get, Req, UseGuards } from "@nestjs/common"
import { Request } from "express"
import { JwtAuthGuard } from "src/shared/guards"

import { UserService } from "./services"

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UserService) {}

	@UseGuards(JwtAuthGuard)
	@Get("/profile")
	async profile(@Req() request: Request) {
		return await this.usersService.getProfile(request.userId)
	}
}
