import { Controller } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { FamilyParentService } from "../services"

@ApiTags("Family Parents")
@Controller("users/family-parents")
export class FamilyParentsController {
	constructor(private readonly familyParentService: FamilyParentService) {}
}
