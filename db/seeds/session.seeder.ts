import { DataSource } from "typeorm"
import { Seeder } from "typeorm-extension"

import { SESSIONS } from "../../src/schools/constants"
import { Session } from "../../src/schools/entities"

export default class SessionSeeder implements Seeder {
	public async run(dataSource: DataSource): Promise<void> {
		const sessions = SESSIONS.map(({ name }) => {
			const session = new Session()
			session.name = name
			return session
		})

		await dataSource.getRepository(Session).save(sessions)
	}
}
