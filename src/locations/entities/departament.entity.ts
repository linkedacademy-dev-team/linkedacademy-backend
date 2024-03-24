import { BaseEntity } from "src/shared/entities"
import { Column, Entity, ManyToOne, OneToMany } from "typeorm"

import { City } from "./city.entity"
import { Country } from "./country.entity"

@Entity()
export class Departament extends BaseEntity {
	@Column({ type: "varchar", length: 40 })
	name: string

	@ManyToOne(() => Country, (country) => country.departaments)
	country: Country

	@OneToMany(() => City, (city) => city.departament)
	cities: City[]
}
