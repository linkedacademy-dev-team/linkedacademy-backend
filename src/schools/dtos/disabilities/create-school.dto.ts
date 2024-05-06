import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateSchoolDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string

	@IsNumber()
	@IsNotEmpty()
	readonly cityId: number

	@IsNumber()
	@IsOptional()
	readonly schoolParentId?: number

	@IsString()
	@IsNotEmpty()
	readonly logo: string

	@IsString()
	@IsEmail()
	email: string

	@IsString()
	@IsOptional()
	address?: string

	@IsString()
	@IsOptional()
	phone?: string

	@IsOptional()
	@IsArray()
	coordinates: number[]
}
