import { BaseEntity } from "src/shared/entities"
import { User } from "src/users/entites"
import { Column, Entity, ManyToOne } from "typeorm"

import { BroadcastChannel } from "./broadcast-channel.entity"

@Entity()
export class BroadcastChannelToUser extends BaseEntity {
	@Column()
	userId: number

	@Column()
	broadcastChannelId: number

	@ManyToOne(() => User, (user) => user.broadcastChannels, { cascade: true })
	user: User

	@ManyToOne(() => BroadcastChannel, (broadcastChannel) => broadcastChannel.users, {
		cascade: true
	})
	broadcastChannel: BroadcastChannel
}
