import { Transform, Type } from "class-transformer"
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

const schoolEntityRelations = [
	"specialities",
	"disabilities",
	"ethnicGroups",
	"educationLevels",
	"educationModes",
	"languages",
	"sessions"
]

export class GetSchoolExtraInfoDto {
	@IsString()
	@IsIn(schoolEntityRelations)
	@IsNotEmpty()
	@Transform(({ value }) => value.toLowerCase())
	readonly relation: string

	@IsNumber()
	@IsNotEmpty()
	@Type(() => Number)
	readonly schoolId: number

	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	@Type(() => Number)
	readonly relationId?: number
}
