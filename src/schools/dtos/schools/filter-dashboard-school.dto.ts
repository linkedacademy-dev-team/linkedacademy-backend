import { IsOptional, IsString } from "class-validator"

export class FilterDashboardSchoolDto {
	@IsOptional()
	@IsString()
	readonly name: string
}
