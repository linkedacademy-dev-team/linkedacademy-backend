import { BaseEntity } from "src/shared/entities"
import { User } from "src/users/entites"
import { Entity, Index, ManyToOne } from "typeorm"

import { Role } from "./role.entity"

@Entity()
export class UserToRole extends BaseEntity {
	@Index("idx_user_role_user")
	@ManyToOne(() => User, (user) => user.roles, { onDelete: "CASCADE" })
	user: User

	@Index("idx_user_role_role")
	@ManyToOne(() => Role, (role) => role.users, { onDelete: "CASCADE" })
	role: Role
}
