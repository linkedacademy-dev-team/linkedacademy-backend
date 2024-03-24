import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SharedModule } from "src/shared/shared.module"
import { UsersModule } from "src/users/users.module"

import { AuthController } from "./controllers"
import { Role } from "./entities"
import { UserToRole } from "./entities/userRole.entity"
import { RoleService, UserRoleService } from "./services"
import { AuthService } from "./services/auth.service"

@Module({
	imports: [
		TypeOrmModule.forFeature([UserToRole, Role]),
		forwardRef(() => UsersModule),
		SharedModule
	],
	providers: [UserRoleService, RoleService, AuthService],
	exports: [UserRoleService, RoleService],
	controllers: [AuthController]
})
export class AuthModule {}
