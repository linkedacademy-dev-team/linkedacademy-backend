import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SharedModule } from "src/shared/shared.module"
import { UsersModule } from "src/users/users.module"

import { AuthController } from "./controllers"
import { FeatureController } from "./controllers/feature.controller"
import { PermissionsController } from "./controllers/permissions.controller"
import { RolesController } from "./controllers/roles.controller"
import { Feature, Role } from "./entities"
import { Permission } from "./entities/permission.entity"
import { UserToRole } from "./entities/userRole.entity"
import { PermissionService, RoleService, UserRoleService } from "./services"
import { AuthService } from "./services/auth.service"
import { FeaturesService } from "./services/features.service"

@Module({
	imports: [
		TypeOrmModule.forFeature([UserToRole, Role, Permission, Feature]),
		forwardRef(() => UsersModule),
		SharedModule
	],
	providers: [UserRoleService, RoleService, AuthService, PermissionService, FeaturesService],
	exports: [UserRoleService, RoleService, PermissionService, FeaturesService],
	controllers: [AuthController, PermissionsController, RolesController, FeatureController]
})
export class AuthModule {}
