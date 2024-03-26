import { RequestMethod, ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as compression from "compression"

import { AppModule } from "./app.module"

const GLOBAL_PREFIX = "api"
const X_POWERED_BY = "x-powered-by"
const PORT = process.env.PORT || 3000
const SWAGGER_PATH = "docs"
const SWAGGER_TITLE = "Linked Academy API Documentation"
const SWAGGER_DESCRIPTION = "School search and management API"
const SWAGGER_VERSION = "1.0"
const LOCAL_SERVER = `http://localhost:${PORT}`
const PRODUCTION_SERVER = "https://linkedacademy-backend-production.up.railway.app"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const expressInstance = app.getHttpAdapter().getInstance()
	const config = new DocumentBuilder()
		.setTitle(SWAGGER_TITLE)
		.setDescription(SWAGGER_DESCRIPTION)
		.setVersion(SWAGGER_VERSION)
		.addServer(LOCAL_SERVER, "Local server")
		.addServer(PRODUCTION_SERVER, "Production server")
		.addBasicAuth()
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)

	app.use(compression())
	app.useGlobalPipes(new ValidationPipe())

	app.setGlobalPrefix(GLOBAL_PREFIX, { exclude: [{ path: "/", method: RequestMethod.GET }] })
	expressInstance.disable(X_POWERED_BY)
	app.enableCors()
	SwaggerModule.setup(SWAGGER_PATH, app, document, {
		customSiteTitle: SWAGGER_TITLE,
		swaggerOptions: { docExpansion: "list" },
		useGlobalPrefix: true
	})

	await app.listen(PORT)
}
bootstrap()
