import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { ROLES } from "../constants"
import { Role } from "../entities"

@Injectable()
export class RoleService {
	constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>) {}

	async findByName(roleName: ROLES) {
		return this.roleRepository.findOne({ where: { name: roleName } })
	}
}
