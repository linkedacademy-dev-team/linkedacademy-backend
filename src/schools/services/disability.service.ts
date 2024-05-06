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

	async create(createDisabilityDto: CreateDisabilityDto) {
		return this.disabilityRepository.save(createDisabilityDto)
	}

	async update(id: number, updateDisabilityDto: UpdateDisabilityDto) {
		return this.disabilityRepository.update(id, updateDisabilityDto)
	}
}
