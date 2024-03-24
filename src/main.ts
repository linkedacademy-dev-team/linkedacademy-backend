import { RequestMethod, ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import * as compression from "compression"

import { AppModule } from "./app.module"

const GLOBAL_PREFIX = "api"
const X_POWERED_BY = "x-powered-by"
const PORT = process.env.PORT || 3000

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const expressInstance = app.getHttpAdapter().getInstance()

	app.use(compression())
	app.useGlobalPipes(new ValidationPipe())

	expressInstance.disable(X_POWERED_BY)
	app.setGlobalPrefix(GLOBAL_PREFIX, { exclude: [{ path: "/", method: RequestMethod.GET }] })
	app.enableCors()

	await app.listen(PORT)
}
bootstrap()
