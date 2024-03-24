import { ConfigModuleOptions } from "@nestjs/config"

const env = process.env.NODE_ENV

export const envConfig: ConfigModuleOptions = {
	isGlobal: true,
	envFilePath: [`.env.${env}`]
}
