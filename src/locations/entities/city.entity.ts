import { School } from "src/schools/entities"
import { BaseEntity } from "src/shared/entities"
import { User } from "src/users/entites"
import { Column, Entity, ManyToOne, OneToMany } from "typeorm"

import { Departament } from "./departament.entity"

@Entity()
export class City extends BaseEntity {
	@Column({ type: "varchar", length: 40 })
	name: string

	@ManyToOne(() => Departament, (departament) => departament.cities)
	departament: Departament

	@OneToMany(() => User, (user) => user.city)
	users: User[]

	@OneToMany(() => School, (school) => school.city)
	schools: School[]
}
