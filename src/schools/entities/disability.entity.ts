import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class Disability extends BaseEntity {
	@Index("idx_disability_name")
	@Column({ type: "varchar", length: 72, unique: true })
	name: string
}
