import { ConflictException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { ROLES } from "src/auth/constants"
import { UserRoleService } from "src/auth/services"
import { GeolocationUtil, PasswordUtil } from "src/shared/utils"
import { UsernameUtil } from "src/shared/utils/username.util"
import { Repository } from "typeorm"

import { CreateFamilyParentDto } from "../dtos"
import { User } from "../entites"
import { UserService } from "./user.service"

@Injectable()
export class AttendantService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		private readonly userService: UserService,
		private readonly passwordUtil: PasswordUtil,
		private readonly geolocationUtil: GeolocationUtil,
		private readonly userRoleService: UserRoleService,
		private readonly usernameUtil: UsernameUtil
	) {}

	async create(creteFamilyParentDto: CreateFamilyParentDto): Promise<User> {
		const { email, password, coordinates } = creteFamilyParentDto

		try {
			const userExitsByEmail = await this.userService.findOneByEmail(email)

			if (userExitsByEmail) throw new ConflictException("User with this email already exists")

			const hashedPassword = await this.passwordUtil.hashPassword(password)

			const newUser = this.userRepository.create({
				...creteFamilyParentDto,
				username: this.usernameUtil.generateUsernameFromEmail(email),
				coordinates: coordinates?.length ? `POINT(${coordinates.join(" ")})` : null,
				password: hashedPassword,
				status: true,
				city: { id: creteFamilyParentDto.cityId }
			})

			await Promise.all([
				this.userRepository.save(newUser),
				this.userRoleService.assignRole(newUser.id, ROLES.ATTENDANT)
			])

			return { ...newUser, password: undefined }
		} catch (error) {
			throw error
		}
	}
}
