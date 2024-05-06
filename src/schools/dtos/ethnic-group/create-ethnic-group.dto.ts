import { Injectable } from "@nestjs/common"
import { IsNotEmpty, IsString } from "class-validator"

@Injectable()
export class CreateEthnicGroupDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string
}
