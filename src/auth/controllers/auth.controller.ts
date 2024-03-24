import { Body, Controller, Post, UseGuards } from "@nestjs/common"
import { PublicAuthGuard } from "src/shared/guards"

import { RegisterFamilyParentDto, SignInDto } from "../dtos"
import { AuthService } from "../services"

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(PublicAuthGuard)
	@Post("signup/family-parent")
	async signUpFamilyParent(@Body() registerFamilyParentDto: RegisterFamilyParentDto) {
		return this.authService.registerFamilyParent(registerFamilyParentDto)
	}

	@UseGuards(PublicAuthGuard)
	@Post("signin")
	async login(@Body() signInDto: SignInDto) {
		return this.authService.login(signInDto)
	}
}
