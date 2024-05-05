import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SharedModule } from "src/shared/shared.module"
import { UsersModule } from "src/users/users.module"

import { AuthController } from "./controllers"
import { Role } from "./entities"
import { Permission } from "./entities/permission.entity"
import { UserToRole } from "./entities/userRole.entity"
import { PermissionService, RoleService, UserRoleService } from "./services"
import { AuthService } from "./services/auth.service"

@Module({
	imports: [
		TypeOrmModule.forFeature([UserToRole, Role, Permission]),
		forwardRef(() => UsersModule),
		SharedModule
	],
	providers: [UserRoleService, RoleService, AuthService, PermissionService],
	exports: [UserRoleService, RoleService, PermissionService],
	controllers: [AuthController]
})
export class AuthModule {}
