import { PartialType } from "@nestjs/swagger"

import { CreateEthnicGroupDto } from "./create-ethnic-group.dto"

export class UpdateEthnicGroupDto extends PartialType(CreateEthnicGroupDto) {}
