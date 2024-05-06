import { Controller, Get } from "@nestjs/common"

import { FeaturesService } from "../services/features.service"

@Controller("features")
export class FeatureController {
	constructor(private readonly featureService: FeaturesService) {}

	@Get()
	async findAll() {
		return this.featureService.findAll()
	}
}
