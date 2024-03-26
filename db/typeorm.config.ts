import { ConfigModule, ConfigService } from "@nestjs/config"
import { DataSource, DataSourceOptions } from "typeorm"
import { SeederOptions } from "typeorm-extension"

ConfigModule.forRoot({
	envFilePath: `.env.${process.env.NODE_ENV}`
})

const configService = new ConfigService()

export const typeormConfig: DataSourceOptions & SeederOptions = {
	type: "mysql",
	host: configService.get<string>("DB_HOST"),
	port: parseInt(configService.get<string>("DB_PORT")),
	username: configService.get<string>("MYSQL_USER"),
	password: configService.get<string>("MYSQL_PASSWORD"),
	database: configService.get<string>("MYSQL_DATABASE"),
	logging: configService.get<boolean>("DB_LOGGING"),
	synchronize: false,
	legacySpatialSupport: false,
	migrationsRun: true,
	entities: ["dist/**/*.entity{.ts,.js}"],
	migrations: ["dist/db/migrations/*{.ts,.js}"],
	seeds: ["dist/db/seeds/**/*.js"]
}

const datasource = new DataSource(typeormConfig)

export default datasource
