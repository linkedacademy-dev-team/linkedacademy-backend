import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { City } from "../entities"

@Injectable()
export class CityService {
	constructor(@InjectRepository(City) private readonly cityRepository: Repository<City>) {}

	async findAll(): Promise<City[]> {
		return this.cityRepository.find()
	}

	async findByDepartamentId(departamentId: number): Promise<City[]> {
		return this.cityRepository.find({ where: { departament: { id: departamentId } } })
	}
}
