import { BaseEntity } from "src/shared/entities"
import { Column, Entity, Index } from "typeorm"

@Entity()
export class Session extends BaseEntity {
	@Index("idx_session_name")
	@Column({ type: "varchar", length: 16, unique: true })
	name: string
}
