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
		const { coordinates, distance, cityId } = filter

		const numericCoordinates = coordinates?.map((coordinate) => +coordinate)

		const schools = this.schoolRepository
			.createQueryBuilder("school")
			.where("school.cityId = :cityId", { cityId })
			.andWhere(
				"ST_Distance_Sphere(school.coordinates, POINT(:longitude, :latitude)) <= :distance",
				{
					longitude: numericCoordinates[0],
					latitude: numericCoordinates[1],
					distance: this.geolocationUtil.convertKilometersToMeters(distance)
				}
			)

		if (filter.name) {
			schools.andWhere("school.name ILIKE :name", { name: `%${filter.name}%` })
		}

		if (filter.zone) {
			schools.andWhere("school.zone = :zone", { zone: filter.zone })
		}

		if (filter.schedule) {
			schools.andWhere("school.schedule = :schedule", { schedule: filter.schedule })
		}

		if (filter.gender) {
			schools.andWhere("school.gender = :gender", { gender: filter.gender })
		}

		if (filter.type) {
			schools.andWhere("school.type = :type", { type: filter.type })
		}

		if (filter.studentsPerClass) {
			schools.andWhere("school.studentsPerClass = :students", {
				students: filter.studentsPerClass
			})
		}

		if (filter.withLaboratories) {
			schools.andWhere("school.withLaboratories = :withLaboratories", {
				withLaboratories: filter.withLaboratories
			})
		}

		if (filter.withLibrary) {
			schools.andWhere("school.withLibrary = :withLibrary", { withLibrary: filter.withLibrary })
		}

		if (filter.withInternet) {
			schools.andWhere("school.withInternet = :withInternet", { withInternet: filter.withInternet })
		}

		if (filter.withSoccerField) {
			schools.andWhere("school.withSoccerField = :withSoccerField", {
				withSoccerField: filter.withSoccerField
			})
		}

		if (filter.withVolleyballField) {
			schools.andWhere("school.withVolleyballField = :withVolleyballField", {
				withVolleyballField: filter.withVolleyballField
			})
		}

		if (filter.withBasketballField) {
			schools.andWhere("school.withBasketballField = :withBasketballField", {
				withBasketballField: filter.withBasketballField
			})
		}

		if (filter.withSwimmingPool) {
			schools.andWhere("school.withSwimmingPool = :withSwimmingPool", {
				withSwimmingPool: filter.withSwimmingPool
			})
		}

		if (filter.withComputerLab) {
			schools.andWhere("school.withComputerLab = :withComputerLab", {
				withComputerLab: filter.withComputerLab
			})
		}

		if (filter.withTransport) {
			schools.andWhere("school.withTransport = :withTransport", {
				withTransport: filter.withTransport
			})
		}

		if (filter.withRestaurant) {
			schools.andWhere("school.withRestaurant = :withRestaurant", {
				withRestaurant: filter.withRestaurant
			})
		}

		if (filter.withAuditorium) {
			schools.andWhere("school.withAuditorium = :withAuditorium", {
				withAuditorium: filter.withAuditorium
			})
		}

		if (filter.withSnackArea) {
			schools.andWhere("school.withSnackArea = :withSnackArea", {
				withSnackArea: filter.withSnackArea
			})
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
