import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SharedModule } from "src/shared/shared.module"

import { CityController, CountryController, DepartamentController } from "./controllers"
import { City, Country, Departament } from "./entities"
import { CityService, CountryService, DepartamentService } from "./services"

@Module({
	imports: [TypeOrmModule.forFeature([City, Departament, Country]), SharedModule],
	controllers: [CityController, CountryController, DepartamentController],
	providers: [CityService, DepartamentService, CountryService]
})
export class LocationsModule {}
