import { forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { PasswordUtil } from "src/shared/utils"
import { AttendantService, UserService } from "src/users/services"

import { RegisterAttendantDto, SignInDto } from "../dtos"

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UserService)) private readonly userService: UserService,
		@Inject(forwardRef(() => AttendantService))
		private readonly attendantService: AttendantService,
		private readonly passwordUtil: PasswordUtil,
		private readonly jwtService: JwtService
	) {}

	async registerAttendant(
		registerAttendantDto: RegisterAttendantDto
	): Promise<{ created: boolean }> {
		try {
			await this.attendantService.create(registerAttendantDto)
			return { created: true }
		} catch (error) {
			throw error
		}
	}

	async login(signInDto: SignInDto) {
		const { email, password } = signInDto

		const user = await this.userService.findOneByEmail(email)

		if (!user) throw new UnauthorizedException("Invalid credentials")

		const isPasswordValid = await this.passwordUtil.comparePassword(password, user.password)

		if (!isPasswordValid) throw new UnauthorizedException("Invalid credentials")

		const payload = { sub: user.id }

		return { access_token: this.jwtService.sign(payload) }
	}
}
