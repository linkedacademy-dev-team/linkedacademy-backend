import { Injectable } from "@nestjs/common"
import { IsNotEmpty, IsString } from "class-validator"

@Injectable()
export class CreateSessionDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string
}
