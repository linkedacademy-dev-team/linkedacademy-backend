import { BaseEntity } from "src/shared/entities"
import { Column, Entity, OneToMany } from "typeorm"

import { ROLES } from "../constants"
import { IRole } from "../interfaces/role.interface"
import { Permission } from "./permission.entity"
import { UserToRole } from "./userRole.entity"

@Entity()
export class Role extends BaseEntity implements IRole {
	@Column({ type: "enum", enum: ROLES, nullable: false })
	name: ROLES

	@Column({ type: "text", nullable: true })
	description: string

	@OneToMany(() => UserToRole, (userToRole) => userToRole.role)
	users: UserToRole[]

	@OneToMany(() => Permission, (permission) => permission.role)
	permissions: Permission[]
}
