import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
	getHello() {
		return { message: "Linked Academy API is running 🥳" }
	}
}
