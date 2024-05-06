import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Feature } from "../entities"

@Injectable()
export class FeaturesService {
	constructor(@InjectRepository(Feature) private readonly featureRepository: Repository<Feature>) {}

	async findAll() {
		return this.featureRepository.find()
	}
}
