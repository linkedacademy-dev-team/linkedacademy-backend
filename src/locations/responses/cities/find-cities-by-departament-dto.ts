import { ApiProperty } from "@nestjs/swagger"

export class FindCitiesByDepartamentResponseDto {
	@ApiProperty({
		type: String,
		description: "City's name",
		example: "Bogotá",
		required: true
	})
	name: string

	@ApiProperty({
		type: Date,
		description: "City's creation date",
		example: "2021-09-07T00:00:00.000Z",
		required: true
	})
	createdAt: Date

	@ApiProperty({
		type: Date,
		description: "City's last update date",
		example: "2021-09-07T00:00:00.000Z",
		required: true
	})
	updatedAt: Date

	@ApiProperty({
		type: Date,
		description: "City's deletion date",
		example: null,
		required: false
	})
	deletedAt: Date
}
