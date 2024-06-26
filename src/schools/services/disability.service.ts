import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateDisabilityDto } from "../dtos/disabilities/create-disability.dto"
import { UpdateDisabilityDto } from "../dtos/disabilities/update-disability.dto"
import { Disability } from "../entities"

@Injectable()
export class DisabilityService {
	constructor(
		@InjectRepository(Disability) private readonly disabilityRepository: Repository<Disability>
	) {}

	async findOneById(id: number) {
		return await this.disabilityRepository.findOne({ where: { id } })
	}

	async getAll() {
		return this.disabilityRepository.find()
	}

	async create(createDisabilityDto: CreateDisabilityDto) {
		return this.disabilityRepository.save(createDisabilityDto)
	}

	async update(id: number, updateDisabilityDto: UpdateDisabilityDto) {
		return this.disabilityRepository.update(id, updateDisabilityDto)
	}

	async delete(id: number) {
		return this.disabilityRepository.softDelete(id)
	}
}
