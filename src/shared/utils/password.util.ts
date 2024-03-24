import { Injectable } from "@nestjs/common"
import * as bcrypt from "bcrypt"

interface IPasswordUtil {
	hashPassword(plainPassword: string): Promise<string>
	comparePassword(plainPassword: string, hash: string): Promise<boolean>
}

@Injectable()
export class PasswordUtil implements IPasswordUtil {
	async hashPassword(plainPassword: string): Promise<string> {
		const salt = await bcrypt.genSalt()
		return bcrypt.hash(plainPassword, salt)
	}

	async comparePassword(plainPassword: string, hash: string): Promise<boolean> {
		return bcrypt.compare(plainPassword, hash)
	}
}
