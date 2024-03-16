import { NestFactory } from "@nestjs/core"
import * as compression from "compression"

import { AppModule } from "./app.module"

const GLOBAL_PREFIX = "api"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix(GLOBAL_PREFIX)
	app.use(compression())

	await app.listen(3000)
}
bootstrap()
