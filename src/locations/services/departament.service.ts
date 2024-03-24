import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Departament } from "../entities"

@Injectable()
export class DepartamentService {
	constructor(
		@InjectRepository(Departament) private readonly departamentRepository: Repository<Departament>
	) {}

	async findAll() {
		return await this.departamentRepository.find()
	}

	async findByCountryId(countryId: number): Promise<Departament[]> {
		return await this.departamentRepository.find({ where: { country: { id: countryId } } })
	}
}
