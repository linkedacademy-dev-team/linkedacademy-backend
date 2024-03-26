import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class EthnicGroup extends BaseEntity {
	@Index("idx_ethnic_group_name")
	@Column({ type: "varchar", length: 16, unique: true })
	name: string
}
