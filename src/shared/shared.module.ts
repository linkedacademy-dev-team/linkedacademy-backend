import { Module } from "@nestjs/common"

import { GeolocationUtil, PasswordUtil } from "./utils"

@Module({
	providers: [PasswordUtil, GeolocationUtil],
	exports: [PasswordUtil, GeolocationUtil]
})
export class SharedModule {}
