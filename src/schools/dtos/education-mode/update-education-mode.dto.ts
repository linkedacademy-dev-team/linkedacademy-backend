import { PartialType } from "@nestjs/swagger"

import { CreateEducationModeDto } from "./create-education-mode.dto"

export class UpdateEducationModeDto extends PartialType(CreateEducationModeDto) {}
