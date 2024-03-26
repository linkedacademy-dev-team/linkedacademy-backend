import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { SPECIALITIES } from "../../src/schools/constants"
import { Speciality } from "../../src/schools/entities"

export default class SpecialitySeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const specialities = SPECIALITIES.map(({ name }) => {
			const speciality = new Speciality()
			speciality.name = name
			return speciality
		})

		await dataSource.getRepository(Speciality).save(specialities)
	}
}
