import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateLanguageDto } from "../dtos/languages/create-language.dto"
import { UpdateLanguageDto } from "../dtos/languages/update-language.dto"
import { Language } from "../entities"

@Injectable()
export class LanguageService {
	constructor(
		@InjectRepository(Language) private readonly languageRepository: Repository<Language>
	) {}

	async findOneById(id: number) {
		return await this.languageRepository.findOne({ where: { id } })
	}

	async create(createLanguageDto: CreateLanguageDto) {
		return this.languageRepository.save(createLanguageDto)
	}

	async getAll() {
		return this.languageRepository.find()
	}

	async update(id: number, updateLanguageDto: UpdateLanguageDto) {
		return this.languageRepository.update(id, updateLanguageDto)
	}

	async delete(id: number) {
		return this.languageRepository.softDelete(id)
	}
}
