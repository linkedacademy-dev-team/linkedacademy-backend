import { Body, Controller, Post } from "@nestjs/common"

import { CreateFamilyParentDto } from "../dtos"
import { FamilyParentService } from "../services"

@Controller("users/family-parents")
export class FamilyParentsController {
	constructor(private readonly familyParentService: FamilyParentService) {}

	@Post()
	create(@Body() createFamilyParentDto: CreateFamilyParentDto) {
		return this.familyParentService.create(createFamilyParentDto)
	}
}
