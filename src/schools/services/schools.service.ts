import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { GeolocationUtil } from "src/shared/utils"
import { Repository } from "typeorm"

import { CreateSchoolDto } from "../dtos"
import { FilterSchoolDto } from "../dtos/schools/filter-school.dto"
import { School } from "../entities"

@Injectable()
export class SchoolsService {
	constructor(
		@InjectRepository(School) private readonly schoolRepository: Repository<School>,
		private readonly geolocationUtil: GeolocationUtil
	) {}

	async filter(filter: FilterSchoolDto) {
		const { coordinates, distance, cityId, ...rest } = filter

		const [latitude, longitude] = coordinates.map((coordinate) => +coordinate)
		const distanceInMeters = this.geolocationUtil.convertKilometersToMeters(distance)

		const schools = this.schoolRepository
			.createQueryBuilder("school")
			.where("school.cityId = :cityId", { cityId })
			.andWhere("is_within_radius(coordinates,:latitude, :longitude, :distance) = 1", {
				longitude,
				latitude,
				distance: distanceInMeters
			})

		for (const key in rest) {
			if (filter[key]) {
				schools.andWhere(`school.${key} = :${key}`, { [key]: filter[key] })
			}
		}

		return await schools.getMany()
	}

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
