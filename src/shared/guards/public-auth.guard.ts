import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Request } from "express"

@Injectable()
export class PublicAuthGuard implements CanActivate {
	constructor(private readonly configService: ConfigService) {}

	canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const authHeader = this.getAuthHeader(request)

		if (!authHeader) throw new UnauthorizedException("Authorization credentials are required")

		const { username, password } = this.decodeBase64Credentials(authHeader)

		const isValid = this.isValidCredentials({ username, password })

		if (!isValid) throw new UnauthorizedException("Invalid credentials")

		return Promise.resolve(true)
	}

	isValidCredentials(credentials: ICredentials) {
		const { username, password } = credentials
		const expectedUsername = this.configService.get<string>("PUBLIC_AUTH_USERNAME")
		const expectedPassword = this.configService.get<string>("PUBLIC_AUTH_PASSWORD")

		return username === expectedUsername && password === expectedPassword
	}

	decodeBase64Credentials(authHeader: string): ICredentials {
		const codedCredentials = authHeader.split(" ")[1]
		const decodedCredentials = Buffer.from(codedCredentials, "base64").toString("utf-8")
		const [username, password] = decodedCredentials.split(":")
		return { username, password }
	}

	getAuthHeader(request: Request) {
		return request.headers.authorization
	}
}

interface ICredentials {
	username: string
	password: string
}
