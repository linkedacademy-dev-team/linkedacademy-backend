import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { In, Repository } from "typeorm"

import { Permission } from "../entities/permission.entity"
@Injectable()
export class PermissionService {
	constructor(
		@InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>
	) {}

	async findByRoles(roleIds: number[]) {
		return this.permissionRepository.find({ where: { role: { id: In(roleIds) } } })
	}
}
