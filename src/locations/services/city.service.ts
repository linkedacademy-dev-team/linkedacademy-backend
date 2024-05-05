import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { GeolocationUtil } from "src/shared/utils"
import { Repository } from "typeorm"

import { City } from "../entities"

@Injectable()
export class CityService {
	constructor(
		@InjectRepository(City) private readonly cityRepository: Repository<City>,
		private readonly geolocationUtil: GeolocationUtil
	) {}

	async findAll(): Promise<City[]> {
		return this.cityRepository.find()
	}

	async findByDepartamentId(departamentId: number) {
		const cities = await this.cityRepository.find({ where: { departament: { id: departamentId } } })

		const citiesWithNormalizedCoordinates = cities.map(({ coordinates, ...rest }) => {
			const normalizedCoords = this.geolocationUtil.normalizePointGeometry(coordinates)
			return { ...rest, coordinates: normalizedCoords }
		})

		return citiesWithNormalizedCoordinates
	}
}
