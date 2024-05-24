import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateEthnicGroupDto } from "../dtos/ethnic-group/create-ethnic-group.dto"
import { UpdateEthnicGroupDto } from "../dtos/ethnic-group/update-ethnic-group.dto"
import { EthnicGroup } from "../entities"

@Injectable()
export class EthnicGroupService {
	constructor(
		@InjectRepository(EthnicGroup) private readonly ethnicGroupRepository: Repository<EthnicGroup>
	) {}

	async findOneById(id: number) {
		return await this.ethnicGroupRepository.findOne({ where: { id } })
	}

	async create(createEthnicGroupDto: CreateEthnicGroupDto) {
		return this.ethnicGroupRepository.save(createEthnicGroupDto)
	}

	async getAll() {
		return this.ethnicGroupRepository.find()
	}

	async update(id: number, updateEthnicGroupDto: UpdateEthnicGroupDto) {
		return this.ethnicGroupRepository.update(id, updateEthnicGroupDto)
	}

	async delete(id: number) {
		return this.ethnicGroupRepository.softDelete(id)
	}
}
