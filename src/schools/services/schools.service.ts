import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { PaginationDto } from "src/shared/dtos"
import { PaginationUtil } from "src/shared/utils/pagination.util"
import { Like, Repository } from "typeorm"

import { CreateSchoolDto } from "../dtos"
import { FilterDashboardSchoolDto } from "../dtos/schools/filter-dashboard-school.dto"
import { FilterSchoolDto } from "../dtos/schools/filter-school.dto"
import { GetSchoolExtraInfoDto } from "../dtos/schools/get-school-extra-info.dto"
import { School } from "../entities"

@Injectable()
export class SchoolsService {
	constructor(
		@InjectRepository(School) private readonly schoolRepository: Repository<School>,
		private readonly paginationUtil: PaginationUtil
	) {}

	async activateOrDeactivateSchoolAditionalInfo(
		getSchoolExtraInfoDto: GetSchoolExtraInfoDto,
		activate: boolean
	) {
		const { relation, schoolId, relationId } = getSchoolExtraInfoDto

		const school = await this.schoolRepository
			.createQueryBuilder("school")
			.where("school.id = :id", { id: schoolId })
			.leftJoinAndSelect(relation, relation)
		// .getOne()

		if (!school) throw new NotFoundException("School not found")

		let relationAsSingle: string

		const parsedRelation = relation.toLowerCase()

		switch (parsedRelation) {
			case "specialities":
				relationAsSingle = "Speciality"
				break
			case "disabilities":
				relationAsSingle = "Disability"
				break
			case "ethnicGroups":
				relationAsSingle = "EthnicGroup"
				break
			case "educationLevels":
				relationAsSingle = "EducationLevel"
				break
			case "educationModes":
				relationAsSingle = "EducationMode"
				break
			case "languages":
				relationAsSingle = "Language"
				break
			case "sessions":
				relationAsSingle = "Session"
				break
			default:
				break
		}

		const relationEntity = await this.schoolRepository.manager.findOne(relationAsSingle, {
			where: { id: +relationId }
		})

		if (!relationEntity) throw new NotFoundException("Entity not found")

		if (String(activate) === "1") {
			await this.schoolRepository
				.createQueryBuilder("school")
				.relation(relation)
				.of(+schoolId)
				.add(relationEntity)
		} else {
			this.schoolRepository
				.createQueryBuilder("school")
				.relation(relation)
				.of(+schoolId)
				.remove(relationEntity)
		}
	}

	async getSchoolAdditionalInfo(getSchoolExtraInfoDto: GetSchoolExtraInfoDto) {
		const { relation, schoolId } = getSchoolExtraInfoDto

		const school = await this.schoolRepository
			.createQueryBuilder("school")
			.relation(relation)
			.of(+schoolId)
			.loadMany()

		return school
	}

	async getSchoolById(id: number) {
		const school = await this.schoolRepository.findOne({
			where: { id },
			relations: {
				city: { departament: { cities: true } },
				schoolParent: true
			}
		})

		if (!school) throw new NotFoundException("School not found")

		return school
	}

	async getByCityID(
		paginationDto: PaginationDto,
		filterDashboardSchoolDto: FilterDashboardSchoolDto,
		cityId: number
	) {
		const { take, skip } = this.paginationUtil.getPagination(paginationDto)

		const { name: nameFilter } = filterDashboardSchoolDto

		const [schools, total] = await this.schoolRepository.findAndCount({
			where: {
				city: { id: cityId },
				name: nameFilter ? Like(`%${nameFilter}%`) : Like("%%")
			},
			relations: { city: true, schoolParent: true },
			take,
			skip
		})

		const pagination = this.paginationUtil.getPaginationResponse(paginationDto, total)

		return { schools, pagination }
	}

	async filter(filter: FilterSchoolDto) {
		const { coordinates: userCoordinates, distance, ...rest } = filter
		const [latitude, longitude] = userCoordinates.map((coordinate) => +coordinate)

		const queryBuilder = this.schoolRepository
			.createQueryBuilder("school")
			.addSelect(
				`ST_Distance(school.coordinates, ST_GeomFromText('POINT(:latitude :longitude)'))`,
				"distanceFromCoordinates"
			)
			.where(
				"ST_Distance(school.coordinates, ST_GeomFromText('POINT(:latitude :longitude)')) <= :distance",
				{ latitude, longitude, distance: distance / 100 }
			)
			.leftJoinAndSelect("school.city", "city")
			.leftJoinAndSelect("school.schoolParent", "schoolParent")

		for (const key in rest) {
			if (filter[key]) {
				queryBuilder.andWhere(`school.${key} = :${key}`, { [key]: filter[key] })
			}
		}

		const result = await queryBuilder.getRawAndEntities()
		const { raw, entities } = result

		const schoolsWithDistance = entities.map((school, index) => ({
			...school,
			distance: +raw[index].distanceFromCoordinates * 100
		}))

		return {
			schools: schoolsWithDistance,
			total: schoolsWithDistance.length,
			coordinates: [latitude, longitude]
		}
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

	async findOneById(id: number): Promise<School> {
		return await this.schoolRepository.findOne({ where: { id } })
	}
}
