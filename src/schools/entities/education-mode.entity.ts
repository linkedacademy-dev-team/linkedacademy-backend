import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class EducationModel extends BaseEntity {
	@Index("idx_education_model_name")
	@Column({ type: "varchar", length: 72, unique: true })
	name: string
}
