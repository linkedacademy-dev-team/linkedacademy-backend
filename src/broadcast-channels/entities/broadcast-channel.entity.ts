import { School } from "src/schools/entities"
import { BaseEntity } from "src/shared/entities"
import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"

import { Post } from "./posts.entity"

@Entity()
export class BroadcastChannel extends BaseEntity {
	@OneToOne(() => School, (school) => school.broadcastChannel)
	@JoinColumn()
	school: School

	@OneToMany(() => Post, (post) => post.broadcastChannel)
	posts: Post[]
}
