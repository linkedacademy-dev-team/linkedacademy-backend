import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SignInDto {
	@IsEmail()
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		description: "User email",
		example: "johndoe@gmail.com",
		required: true
	})
	readonly email: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		description: "User password",
		example: "password",
		required: true
	})
	readonly password: string
}
