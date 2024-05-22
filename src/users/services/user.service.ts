import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { User } from "../entites"

@Injectable()
export class UserService {
	constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

	async getProfile(id: number) {
		const user = await this.findOneById(id)

		if (!user) throw new NotFoundException("User not found")

		const { firstName, lastName, id: userId, email } = user

		return { firstName, lastName, id: userId, email }
	}

	async findOneById(id: number): Promise<User> {
		return await this.userRepository.findOne({ where: { id } })
	}

	async findOneByEmail(email: string): Promise<User> {
		return await this.userRepository.findOne({ where: { email } })
	}
}
