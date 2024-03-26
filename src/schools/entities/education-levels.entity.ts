import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class EducationLevels extends BaseEntity {
	@Index("idx_education_level_name")
	@Column({ type: "varchar", length: 72, unique: true })
	name: string
}
