import { UserToRole } from "src/auth/entities/userRole.entity"
import { BroadcastChannel } from "src/broadcast-channels/entities"
import { City } from "src/locations/entities"
import { School } from "src/schools/entities"
import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"

import { IUser } from "../interfaces"

@Entity()
export class User extends BaseEntity implements IUser {
	@Index("idx_user_first_name")
	@Column({ type: "varchar", length: 40 })
	firstName: string

	@Index("idx_user_last_name")
	@Column({ type: "varchar", length: 40 })
	lastName: string

	@Index("idx_user_status")
	@Column({ type: "boolean", default: false })
	status: boolean

	@Index("idx_user_username")
	@Column({ type: "varchar", length: 40, unique: true })
	username: string

	@Index("idx_user_email")
	@Column({ type: "varchar", length: 40, unique: true })
	email: string

	@Column({ type: "varchar", length: 255 })
	password: string

	@Column({ type: "point", nullable: true })
	coordinates: string

	@Column({ type: "timestamp", nullable: true })
	lastLogin: Date

	@OneToMany(() => UserToRole, (role) => role.user)
	roles: UserToRole[]

	@ManyToOne(() => City, (city) => city.users)
	city: City

	@ManyToOne(() => School, (school) => school.users)
	school: School

	@ManyToMany(() => BroadcastChannel)
	@JoinTable()
	broadcastChannels: BroadcastChannel[]
}
