import { ApiProperty } from "@nestjs/swagger"

export class FindAllCountriesResponseDto {
	@ApiProperty({
		type: String,
		description: "Country's name",
		example: "Colombia",
		required: true
	})
	name: string

	@ApiProperty({
		type: String,
		description: "Country's code",
		example: "CO",
		required: true
	})
	code: string

	@ApiProperty({
		type: Date,
		description: "Country's creation date",
		example: "2021-09-07T00:00:00.000Z",
		required: true
	})
	createdAt: Date

	@ApiProperty({
		type: Date,
		description: "Country's last update date",
		example: "2021-09-07T00:00:00.000Z",
		required: true
	})
	updatedAt: Date

	@ApiProperty({
		type: Date,
		description: "Country's deletion date",
		example: null,
		required: false
	})
	deletedAt: Date
}
