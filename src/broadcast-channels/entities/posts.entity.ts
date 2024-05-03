import { BaseEntity } from "src/shared/entities"
import { Column, Entity, ManyToOne } from "typeorm"

import { BroadcastChannel } from "./broadcast-channel.entity"

@Entity()
export class Post extends BaseEntity {
	@Column({ type: "varchar", length: 40 })
	title: string

	@Column({ type: "text" })
	content: string

	@Column({ type: "varchar", length: 255 })
	image: string

	@Column({ type: "boolean", default: false })
	visible: boolean

	@ManyToOne(() => BroadcastChannel, (broadcastChannel) => broadcastChannel.posts)
	broadcastChannel: BroadcastChannel
}
