import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Country } from "../entities"

@Injectable()
export class CountryService {
	constructor(@InjectRepository(Country) private readonly countryRepository: Repository<Country>) {}

	async findAll(): Promise<Country[]> {
		return this.countryRepository.find()
	}
}
