import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { DISABILITIES } from "../../src/schools/constants"
import { Disability } from "../../src/schools/entities"

export default class DisabilitySeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const disabilities = DISABILITIES.map(({ name }) => {
			const disability = new Disability()
			disability.name = name
			return disability
		})

		await dataSource.getRepository(Disability).save(disabilities)
	}
}
