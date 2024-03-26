import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class Language extends BaseEntity {
	@Index("idx_language_name")
	@Column({ type: "varchar", length: 16, unique: true })
	name: string
}
