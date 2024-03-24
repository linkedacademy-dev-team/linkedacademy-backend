import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "src/auth/auth.module"
import { SharedModule } from "src/shared/shared.module"

import { FamilyParentsController } from "./controllers"
import { User } from "./entites"
import { FamilyParentService, UserService } from "./services"

@Module({
	controllers: [FamilyParentsController],
	imports: [TypeOrmModule.forFeature([User]), SharedModule, forwardRef(() => AuthModule)],
	providers: [FamilyParentService, UserService],
	exports: [UserService, FamilyParentService]
})
export class UsersModule {}
