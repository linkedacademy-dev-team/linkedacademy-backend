import { City } from "src/locations/entities"
import { BaseEntity } from "src/shared/entities"
import { User } from "src/users/entites"
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm"

import { SCHOOL_GENDERS, SCHOOL_SCHEDULES, SCHOOL_TYPES, SCHOOL_ZONES } from "../constants"
import { Disability } from "./disability.entity"
import { EducationLevels } from "./education-levels.entity"
import { EducationModel } from "./education-mode.entity"
import { EthnicGroup } from "./ethnic-group.entity"
import { Language } from "./lenguages.entity"
import { Session } from "./session.entity"
import { Speciality } from "./speciality.entity"

@Entity()
export class School extends BaseEntity {
	@Index("idx_school_name")
	@Column({ type: "varchar", length: 255, unique: true })
	name: string

	@Column({ type: "varchar", length: 255, nullable: true })
	logo: string

	@Column({ type: "point", nullable: true })
	coordinates: string

	@Index("idx_school_email")
	@Column({ type: "varchar", length: 255, nullable: true, unique: true })
	email: string

	@Column({ type: "varchar", length: 72, nullable: true })
	owner: string

	@Column({ type: "varchar", length: 64, nullable: true })
	address: string

	@Column({ type: "varchar", length: 16, nullable: true, unique: true })
	phone: string

	@Index("idx_school_zone")
	@Column({ type: "enum", enum: SCHOOL_ZONES, nullable: true })
	zone: SCHOOL_ZONES

	@Index("idx_school_schedule")
	@Column({ type: "enum", enum: SCHOOL_SCHEDULES, nullable: true })
	schedule: SCHOOL_SCHEDULES

	@Index("idx_school_gender")
	@Column({ type: "enum", enum: SCHOOL_GENDERS, nullable: true })
	gender: SCHOOL_GENDERS

	@Index("idx_school_type")
	@Column({ type: "enum", enum: SCHOOL_TYPES, nullable: true })
	type: SCHOOL_TYPES

	@Index("idx_school_min_budget")
	@Column({ type: "decimal", nullable: true, unsigned: true, precision: 6, scale: 2 })
	minBudget: number

	@Index("idx_school_max_budget")
	@Column({ type: "decimal", nullable: true, unsigned: true, precision: 6, scale: 2 })
	maxBudget: number

	@Column({ type: "float", nullable: true })
	studentsPerClass: number

	@Index("idx_school_with_laboratories")
	@Column({ type: "boolean", default: false, nullable: true })
	withLaboratories: boolean

	@Index("idx_school_with_library")
	@Column({ type: "boolean", default: false, nullable: true })
	withLibrary: boolean

	@Index("idx_school_with_internet")
	@Column({ type: "boolean", default: false, nullable: true })
	withInternet: boolean

	@Index("idx_school_with_soccer_field")
	@Column({ type: "boolean", default: false, nullable: true })
	withSoccerField: boolean

	@Index("idx_school_with_volleyball_field")
	@Column({ type: "boolean", default: false, nullable: true })
	withVolleyballField: boolean

	@Index("idx_school_with_basketball_field")
	@Column({ type: "boolean", default: false, nullable: true })
	withBasketballField: boolean

	@Index("idx_school_with_swimming_pool")
	@Column({ type: "boolean", default: false, nullable: true })
	withSwimmingPool: boolean

	@Index("idx_school_with_computer_lab")
	@Column({ type: "boolean", default: false, nullable: true })
	withComputerLab: boolean

	@Index("idx_school_with_transport")
	@Column({ type: "boolean", default: false, nullable: true })
	withTransport: boolean

	@Index("idx_school_with_restaurant")
	@Column({ type: "boolean", default: false, nullable: true })
	withRestaurant: boolean

	@Index("idx_school_with_auditorium")
	@Column({ type: "boolean", default: false, nullable: true })
	withAuditorium: boolean

	@Index("idx_school_with_snack_area")
	@Column({ type: "boolean", default: false, nullable: true })
	withSnackArea: boolean

	@ManyToOne(() => School, (school) => school.schoolsChildren)
	schoolParent: School

	@OneToMany(() => School, (school) => school.schoolParent)
	schoolsChildren: School[]

	@OneToMany(() => User, (user) => user.school)
	users: User[]

	@ManyToOne(() => City, (city) => city.schools)
	city: City

	@ManyToMany(() => Language)
	@JoinTable()
	languages: Language[]

	@ManyToMany(() => Speciality)
	@JoinTable()
	specialities: Speciality[]

	@ManyToMany(() => EducationLevels)
	@JoinTable()
	educationLevels: EducationLevels[]

	@ManyToMany(() => Session)
	@JoinTable()
	sessions: Session[]

	@ManyToMany(() => Disability)
	@JoinTable()
	disabilities: Disability[]

	@ManyToMany(() => EducationModel)
	@JoinTable()
	educationModels: EducationModel[]

	@ManyToMany(() => EthnicGroup)
	@JoinTable()
	ethnicGroups: EthnicGroup[]
}
