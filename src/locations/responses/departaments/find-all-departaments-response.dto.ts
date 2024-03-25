import { ApiProperty } from "@nestjs/swagger"

export class FindAllDepartamentsResponseDto {
	@ApiProperty({
		type: String,
		description: "Department's name",
		example: "Antioquia",
		required: true
	})
	name: string

	@ApiProperty({
		type: Date,
		description: "Department's creation date",
		example: "2021-09-07T00:00:00.000Z",
		required: true
	})
	createdAt: Date

	@ApiProperty({
		type: Date,
		description: "Department's last update date",
		example: "2021-09-07T00:00:00.000Z",
		required: true
	})
	updatedAt: Date

	@ApiProperty({
		type: Date,
		description: "Department's deletion date",
		example: null,
		required: false
	})
	deletedAt: Date
}
