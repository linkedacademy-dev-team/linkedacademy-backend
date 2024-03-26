import { Controller } from "@nestjs/common"

import { SchoolsService } from "./services/schools.service"

@Controller("schools")
export class SchoolsController {
	constructor(private readonly schoolsService: SchoolsService) {}
}
