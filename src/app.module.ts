import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { TypeOrmModule } from "@nestjs/typeorm"
import { typeormConfig } from "db/typeorm.config"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { LocationsModule } from "./locations/locations.module"
import { SchoolsModule } from "./schools/schools.module"
import { envConfig, jwtConfig } from "./shared/config"
import { SharedModule } from "./shared/shared.module"
import { UsersModule } from "./users/users.module"
import { BroadcastChannelsModule } from './broadcast-channels/broadcast-channels.module';

@Module({
	imports: [
		ConfigModule.forRoot(envConfig),
		TypeOrmModule.forRoot(typeormConfig),
		JwtModule.register(jwtConfig),
		SharedModule,
		AuthModule,
		UsersModule,
		LocationsModule,
		SchoolsModule,
		BroadcastChannelsModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
