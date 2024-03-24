import { forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserService } from "src/users/services"
import { Repository } from "typeorm"

import { ROLES } from "../constants"
import { UserToRole } from "../entities/userRole.entity"
import { RoleService } from "./role.service"

@Injectable()
export class UserRoleService {
	constructor(
		@InjectRepository(UserToRole) private readonly userToRoleRepository: Repository<UserToRole>,
		private readonly roleService: RoleService,
		@Inject(forwardRef(() => UserService)) private readonly userService: UserService
	) {}

	async assignRole(userId: number, roleName: ROLES) {
		const [user, role] = await Promise.all([
			this.userService.findOneById(userId),
			this.roleService.findByName(roleName)
		])

		if (!user) throw new NotFoundException("User not found")
		if (!role) throw new NotFoundException("Role not found")

		const userToRole = this.userToRoleRepository.create({ user, role })
		await this.userToRoleRepository.save(userToRole)
	}
}
