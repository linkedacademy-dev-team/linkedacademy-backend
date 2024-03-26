import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { LANGUAGES } from "../../src/schools/constants"
import { Language } from "../../src/schools/entities"

export default class LanguagesSeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const language = LANGUAGES.map(({ name }) => {
			const language = new Language()
			language.name = name
			return language
		})

		await dataSource.getRepository(Language).save(language)
	}
}
