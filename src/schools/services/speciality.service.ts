import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateSpecialityDto } from "../dtos/specialities/create-speciality.dto"
import { UpdateSpecialityDto } from "../dtos/specialities/update-speciality.dto"
import { Speciality } from "../entities"

@Injectable()
export class SpecialityService {
	constructor(
		@InjectRepository(Speciality) private readonly specialityRepository: Repository<Speciality>
	) {}

	async findOneById(id: number) {
		return await this.specialityRepository.findOne({ where: { id } })
	}

	async create(createSpecialityDto: CreateSpecialityDto) {
		return this.specialityRepository.save(createSpecialityDto)
	}

	async getAll() {
		return this.specialityRepository.find()
	}

	async update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
		return this.specialityRepository.update(id, updateSpecialityDto)
	}

	async delete(id: number) {
		return this.specialityRepository.softDelete(id)
	}
}
