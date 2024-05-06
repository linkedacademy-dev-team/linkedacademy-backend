import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { RoleAuthGuard } from "src/shared/guards"

import { CreateLanguageDto } from "../dtos/languages/create-language.dto"
import { UpdateLanguageDto } from "../dtos/languages/update-language.dto"
import { LanguageService } from "../services/language.service"

@Controller("languages")
export class LanguageController {
	constructor(private readonly languageService: LanguageService) {}

	@UseGuards(RoleAuthGuard)
	@Get()
	async getAllLanguages() {
		return this.languageService.getAll()
	}

	@UseGuards(RoleAuthGuard)
	@Post()
	async createLanguage(@Body() createLanguageDto: CreateLanguageDto) {
		return this.languageService.create(createLanguageDto)
	}

	@UseGuards(RoleAuthGuard)
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
