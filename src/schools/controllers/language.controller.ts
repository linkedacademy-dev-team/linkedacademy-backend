import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
	UseInterceptors
} from "@nestjs/common"
import { JwtAuthGuard, PublicAuthGuard, RoleAuthGuard } from "src/shared/guards"
import { LogGuard } from "src/shared/guards/log.guard"

import { CreateLanguageDto } from "../dtos/languages/create-language.dto"
import { UpdateLanguageDto } from "../dtos/languages/update-language.dto"
import { LanguageService } from "../services/language.service"

@Controller("languages")
export class LanguageController {
	constructor(private readonly languageService: LanguageService) {}

	@UseGuards(PublicAuthGuard)
	@Get("public")
	async getAllPublicLanguages() {
		return this.languageService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllLanguages() {
		return this.languageService.getAll()
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Post()
	async createLanguage(@Body() createLanguageDto: CreateLanguageDto) {
		return this.languageService.create(createLanguageDto)
	}

	@UseGuards(JwtAuthGuard)
	@UseGuards(RoleAuthGuard)
	@UseInterceptors(LogGuard)
	@Put(":id")
	async updateLanguage(@Param("id") id: number, @Body() updateLanguageDto: UpdateLanguageDto) {
		return this.languageService.update(+id, updateLanguageDto)
	}

	@UseGuards(RoleAuthGuard)
	@Delete(":id")
	async deleteLanguage(@Param("id") id: number) {
		return this.languageService.delete(+id)
	}
}
