import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateEducationModeDto } from "../dtos/education-mode/create-education-mode.dto"
import { UpdateEducationModeDto } from "../dtos/education-mode/update-education-mode.dto"
import { EducationModel } from "../entities"

@Injectable()
export class EducationModeService {
	constructor(
		@InjectRepository(EducationModel)
		private readonly educationModeRepository: Repository<EducationModel>
	) {}

	async create(createEducationModeDto: CreateEducationModeDto) {
		return this.educationModeRepository.save(createEducationModeDto)
	}

	async getAll() {
		return this.educationModeRepository.find()
	}

	async update(id: number, updateEducationModeDto: UpdateEducationModeDto) {
		return this.educationModeRepository.update(id, updateEducationModeDto)
	}

	async delete(id: number) {
		return this.educationModeRepository.softDelete(id)
	}
}
