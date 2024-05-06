import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateSessionDto } from "../dtos/sessions/create-session.dto"
import { UpdateSessionDto } from "../dtos/sessions/update-sessions.dto"
import { Session } from "../entities"

@Injectable()
export class SessionService {
	constructor(@InjectRepository(Session) private readonly sessionRepository: Repository<Session>) {}

	async create(createSessionDto: CreateSessionDto) {
		return this.sessionRepository.save(createSessionDto)
	}

	async getAll() {
		return this.sessionRepository.find()
	}

	async update(id: number, updateSessionDto: UpdateSessionDto) {
		return this.sessionRepository.update(id, updateSessionDto)
	}

	async delete(id: number) {
		return this.sessionRepository.softDelete(id)
	}
}
