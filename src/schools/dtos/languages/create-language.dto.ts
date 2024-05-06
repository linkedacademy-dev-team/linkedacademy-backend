import { Injectable } from "@nestjs/common"
import { IsNotEmpty, IsString } from "class-validator"

@Injectable()
export class CreateLanguageDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string
}
