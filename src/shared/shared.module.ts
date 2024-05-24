import { Module } from "@nestjs/common"

import { GeolocationUtil, PasswordUtil } from "./utils"
import { PaginationUtil } from "./utils/pagination.util"

@Module({
	providers: [PasswordUtil, GeolocationUtil, PaginationUtil],
	exports: [PasswordUtil, GeolocationUtil, PaginationUtil]
})
export class SharedModule {}
