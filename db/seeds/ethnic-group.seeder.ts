import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { ETHNIC_GROUPS } from "../../src/schools/constants"
import { EthnicGroup } from "../../src/schools/entities"

export default class EthnicGroupsSeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const ethnicGroup = ETHNIC_GROUPS.map(({ name }) => {
			const ethnicGroup = new EthnicGroup()
			ethnicGroup.name = name
			return ethnicGroup
		})

		await dataSource.getRepository(EthnicGroup).save(ethnicGroup)
	}
}
