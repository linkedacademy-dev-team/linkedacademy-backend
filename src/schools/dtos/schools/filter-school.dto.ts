import { Type } from "class-transformer"
import {
	IsArray,
	IsBoolean,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	Min
} from "class-validator"
import { SCHOOL_GENDERS, SCHOOL_SCHEDULES, SCHOOL_TYPES, SCHOOL_ZONES } from "src/schools/constants"

export class FilterSchoolDto {
	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	@Type(() => Number)
	readonly cityId: number

	@IsNumber()
	@Min(0)
	@Max(100)
	@Type(() => Number)
	readonly distance: number

	@IsArray()
	@Type(() => Number)
	readonly coordinates: number[]

	@IsOptional()
	@IsString()
	readonly name?: string

	@IsOptional()
	@IsEnum(SCHOOL_ZONES)
	readonly zone?: SCHOOL_ZONES

	@IsOptional()
	@IsEnum(SCHOOL_SCHEDULES)
	readonly schedule?: SCHOOL_SCHEDULES

	@IsOptional()
	@IsEnum(SCHOOL_GENDERS)
	readonly gender?: SCHOOL_GENDERS

	@IsOptional()
	@IsEnum(SCHOOL_TYPES)
	readonly type?: SCHOOL_TYPES

	@IsOptional()
	@IsNumber()
	@Min(0)
	readonly minBudget?: number

	@IsOptional()
	@IsNumber()
	@Min(0)
	@Type(() => Number)
	readonly maxBudget?: number

	@IsOptional()
	@IsNumber()
	@Min(0)
	@Type(() => Number)
	readonly studentsPerClass?: number

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withLaboratories?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withLibrary?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withInternet?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withSoccerField?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withVolleyballField?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withBasketballField?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withSwimmingPool?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withComputerLab?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withTransport?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withRestaurant?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withAuditorium?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withSnackArea?: boolean

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	readonly withChildren?: boolean

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly languages?: number[]

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly specialities?: number[]

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly levels?: number[]

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly sessions?: number[]

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly disabilities?: number[]

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly models?: number[]

	@IsOptional()
	@IsArray()
	@Type(() => Number)
	readonly ethnicGroups?: number[]
}
