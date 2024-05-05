import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { ROLES } from "../constants"
import { Role } from "../entities"
import { UserToRole } from "../entities/userRole.entity"

@Injectable()
export class RoleService {
	constructor(
		@InjectRepository(Role) private readonly roleRepository: Repository<Role>,
		@InjectRepository(UserToRole) private readonly userToRoleRepository: Repository<UserToRole>
	) {}

	async getUserRoles(userId: number) {
		return await this.userToRoleRepository.find({
			where: { user: { id: userId } },
			relations: { role: true }
		})
	}

	async findByName(roleName: ROLES) {
		return this.roleRepository.findOne({ where: { name: roleName } })
	}
}
