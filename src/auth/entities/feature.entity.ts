import { BaseEntity } from "src/shared/entities"
import { Column, Entity, OneToMany } from "typeorm"

import { FEATURES } from "../constants"
import { IFeature } from "../interfaces"
import { Permission } from "./permission.entity"

@Entity()
export class Feature extends BaseEntity implements IFeature {
	@Column({ type: "enum", enum: FEATURES, nullable: false })
	name: FEATURES

	@Column({ type: "text", nullable: true })
	description: string

	@OneToMany(() => Permission, (permission) => permission.feature)
	permissions: Permission[]
}
