import { BaseEntity } from "src/shared/entities"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SchoolLogs extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	entity: string

	@Column()
	entityId: number

	@Column()
	action: string

	@Column()
	userId: number

	@Column({ type: "json", nullable: true })
	old: Record<string, unknown>

	@Column({ type: "json", nullable: true })
	new: Record<string, unknown>

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	timestamp: Date
}
