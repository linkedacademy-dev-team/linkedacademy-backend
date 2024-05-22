import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "src/auth/auth.module"
import { SharedModule } from "src/shared/shared.module"

import { User } from "./entites"
import { AttendantService, UserService } from "./services"
import { UsersController } from "./users.controller"

@Module({
	controllers: [UsersController],
	imports: [TypeOrmModule.forFeature([User]), SharedModule, forwardRef(() => AuthModule)],
	providers: [AttendantService, UserService],
	exports: [UserService, AttendantService]
})
export class UsersModule {}
