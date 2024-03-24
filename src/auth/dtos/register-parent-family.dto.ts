import { Type } from "class-transformer"
import {
	ArrayMaxSize,
	ArrayMinSize,
	IsArray,
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Length
} from "class-validator"

export class RegisterFamilyParentDto {
	@IsString()
	@IsNotEmpty()
	readonly firstName: string

	@IsString()
	@IsNotEmpty()
	readonly lastName: string

	@IsString()
	@IsNotEmpty()
	@IsEmail()
	readonly email: string

	@IsString()
	@Length(6)
	@IsNotEmpty()
	readonly password: string

	@IsOptional()
	@IsArray()
	@ArrayMinSize(2)
	@ArrayMaxSize(2)
	readonly coordinates: number[]

	@IsNumber()
	@Type(() => Number)
	readonly cityId: number
}
