import { ApiProperty } from "@nestjs/swagger"
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

export class RegisterAttendantDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		description: "User first name",
		example: "John",
		required: true
	})
	readonly firstName: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		description: "User last name",
		example: "Doe",
		required: true
	})
	readonly lastName: string

	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@ApiProperty({
		description: "User email",
		example: "johndoe@gmail.com",
		required: true
	})
	readonly email: string

	@IsString()
	@Length(6)
	@IsNotEmpty()
	@ApiProperty({
		description: "User password",
		example: "password",
		required: true
	})
	readonly password: string

	@IsOptional()
	@IsArray()
	@ArrayMinSize(2)
	@ArrayMaxSize(2)
	@ApiProperty({
		description: "User coordinates",
		example: [1.234567, 1.234567],
		required: false
	})
	readonly coordinates: number[]

	@IsNumber()
	@Type(() => Number)
	@IsNotEmpty()
	@ApiProperty({
		description: "City ID where user lives",
		example: 1,
		required: true
	})
	readonly cityId: number
}
