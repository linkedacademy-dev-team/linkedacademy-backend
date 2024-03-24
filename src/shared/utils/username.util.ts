import { Injectable } from "@nestjs/common"
import { generateFromEmail } from "unique-username-generator"

@Injectable()
export class UsernameUtil {
	private readonly RANDOM_DIGITS = 4

	generateUsernameFromEmail(email: string): string {
		return generateFromEmail(email, this.RANDOM_DIGITS)
	}
}
