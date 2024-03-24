import { BaseEntity } from "src/shared/entities"
import { Column, Entity, OneToMany } from "typeorm"

import { Departament } from "./departament.entity"

@Entity()
export class Country extends BaseEntity {
	@Column({ type: "varchar", length: 40 })
	name: string

	@Column({ type: "varchar", length: 8 })
	code: string

	@OneToMany(() => Departament, (departament) => departament.country)
	departaments: Departament[]
}
