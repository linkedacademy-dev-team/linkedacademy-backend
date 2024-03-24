import {
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm"

export abstract class BaseEntity {
	@PrimaryGeneratedColumn({ unsigned: true })
	id: number

	@CreateDateColumn({
		type: "timestamp",
		name: "created_at"
	})
	createdAt: Date

	@UpdateDateColumn({
		type: "timestamp",
		name: "updated_at",
		nullable: true
	})
	updatedAt: Date

	@DeleteDateColumn({
		type: "timestamp",
		name: "deleted_at",
		nullable: true
	})
	deletedAt: Date
}
