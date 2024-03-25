import { Controller, Get } from "@nestjs/common"
import { ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger"

import { AppService } from "./app.service"

class HomeResponse {
	@ApiProperty({
		example: "Linked Academy API is running 🥳"
	})
	message: string
}

@ApiTags("Home")
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@ApiResponse({
		status: 200,
		type: HomeResponse
	})
	getHello() {
		return this.appService.getHello()
	}
}
