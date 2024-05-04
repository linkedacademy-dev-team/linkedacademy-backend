import { Body, Controller, HttpStatus, Post, UseGuards } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { PublicAuthGuard } from "src/shared/guards"

import { RegisterAttendantDto, SignInDto } from "../dtos"
import { SignInSuccessResponseDto } from "../responses"
import { AuthService } from "../services"

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(PublicAuthGuard)
	@Post("signup/attendant")
	async signUpAttendant(@Body() registerAttendantDto: RegisterAttendantDto) {
		return this.authService.registerAttendant(registerAttendantDto)
	}

	@UseGuards(PublicAuthGuard)
	@Post("signin")
	@ApiResponse({
		status: HttpStatus.CREATED,
		type: SignInSuccessResponseDto,
		description: "User signed in successfully"
	})
	async login(@Body() signInDto: SignInDto) {
		return this.authService.login(signInDto)
	}
}
