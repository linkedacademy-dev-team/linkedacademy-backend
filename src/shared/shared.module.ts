import { Module } from "@nestjs/common"

import { GeolocationUtil, PasswordUtil } from "./utils"
import { UsernameUtil } from "./utils/username.util"

@Module({
	providers: [PasswordUtil, GeolocationUtil, UsernameUtil],
	exports: [PasswordUtil, GeolocationUtil, UsernameUtil]
})
export class SharedModule {}
