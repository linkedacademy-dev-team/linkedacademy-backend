import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index, ManyToOne } from "typeorm"

import { IPermission } from "../interfaces"
import { Feature } from "./feature.entity"
import { Role } from "./role.entity"

@Entity()
export class Permission extends BaseEntity implements IPermission {
	@Column({ type: "boolean", default: false })
	canWrite: boolean

	@Column({ type: "boolean", default: false })
	canRead: boolean

	@Column({ type: "boolean", default: false })
	canUpdate: boolean

	@Column({ type: "boolean", default: false })
	canDelete: boolean

	@Index("idx_permission_role")
	@ManyToOne(() => Role, (role) => role.permissions, { eager: true, onDelete: "CASCADE" })
	role: Role

	@Index("idx_permission_feature")
	@ManyToOne(() => Feature, (feature) => feature.permissions, { eager: true, onDelete: "CASCADE" })
	feature: Feature
}
