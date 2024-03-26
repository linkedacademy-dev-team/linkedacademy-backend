import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { EDUCATION_MODES } from "../../src/schools/constants"
import { EducationModel } from "../../src/schools/entities"

export default class EducationModeSeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const educationModel = EDUCATION_MODES.map(({ name }) => {
			const educationModel = new EducationModel()
			educationModel.name = name
			return educationModel
		})

		await dataSource.getRepository(EducationModel).save(educationModel)
	}
}
