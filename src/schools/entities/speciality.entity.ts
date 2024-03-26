import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class Speciality extends BaseEntity {
	@Index("idx_speciality_name")
	@Column({ type: "varchar", length: 16, unique: true })
	name: string
}
