import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { EDUCATION_LEVELS } from "../../src/schools/constants"
import { EducationLevels } from "../../src/schools/entities"

export default class EducationLevelsSeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const educationLevels = EDUCATION_LEVELS.map(({ name }) => {
			const educationLevel = new EducationLevels()
			educationLevel.name = name
			return educationLevel
		})

		await dataSource.getRepository(EducationLevels).save(educationLevels)
	}
}
