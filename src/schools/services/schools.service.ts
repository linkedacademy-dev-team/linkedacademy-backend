import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateSchoolDto } from "../dtos"
import { School } from "../entities"

@Injectable()
export class SchoolsService {
	constructor(@InjectRepository(School) private readonly schoolRepository: Repository<School>) {}

	async create(createSchoolDto: CreateSchoolDto): Promise<void> {
		const { coordinates, ...rest } = createSchoolDto

		const school = this.schoolRepository.create({
			city: { id: createSchoolDto.cityId },
			schoolParent: { id: createSchoolDto.schoolParentId },
			coordinates: coordinates?.length ? `POINT(${coordinates.join(" ")})` : null,
			...rest
		})
		await this.schoolRepository.save(school)
	}
}
