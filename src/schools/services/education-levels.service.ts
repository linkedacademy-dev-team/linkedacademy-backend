import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateEducationLevelDto } from "../dtos/education-levels/create-education-level.dto"
import { UpdateEducationLevelDto } from "../dtos/education-levels/update-education-leve.dto"
import { EducationLevels } from "../entities"

@Injectable()
export class EducationLevelService {
	constructor(
		@InjectRepository(EducationLevels)
		private readonly educationLevelRepository: Repository<EducationLevels>
	) {}

	async getAll() {
		return this.educationLevelRepository.find()
	}

	async create(createEducationLevelDto: CreateEducationLevelDto) {
		return this.educationLevelRepository.save(createEducationLevelDto)
	}

	async update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
		return this.educationLevelRepository.update(id, updateEducationLevelDto)
	}

	async delete(id: number) {
		return this.educationLevelRepository.softDelete(id)
	}
}
