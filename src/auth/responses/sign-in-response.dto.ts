import { ApiProperty } from "@nestjs/swagger"

export class SignInSuccessResponseDto {
	@ApiProperty({
		description: "The access token for the user",
		example:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE1LCJpYXQiOjE3MTEzOTA3MDcsImV4cCI6MTcxMTM5NzkwN30.-ChQYb6DXc7Tl5sdfnCN_VWAU1lsXuz078HeUDxB_Ss"
	})
	access_token: string
}
