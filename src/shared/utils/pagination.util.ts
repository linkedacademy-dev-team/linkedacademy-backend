import { Injectable } from "@nestjs/common"

import { PaginationDto } from "../dtos"

@Injectable()
export class PaginationUtil {
	getPagination(paginationDto: PaginationDto) {
		const { page, limit } = paginationDto

		return {
			take: +limit,
			skip: (page - 1) * +limit
		}
	}

	getPaginationResponse(paginationDto: PaginationDto, total: number) {
		const { page, limit } = paginationDto
		return {
			page: +page,
			limit: +limit,
			total: +total,
			totalPages: Math.ceil(total / limit),
			hasPrevious: page > 1,
			hasNext: total > page * limit
		}
	}
}
