/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Request } from "express"
import { Observable } from "rxjs"
import { SchoolLogs } from "src/logs/entities/school-log.entity"
import { Repository } from "typeorm"

@Injectable()
export class LogGuard implements NestInterceptor {
	constructor(
		@InjectRepository(SchoolLogs)
		private readonly schoolLogsRepository: Repository<SchoolLogs>
	) {}

	async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
		const request: Request = context.switchToHttp().getRequest()

		const userId = request?.userId

		if (!userId) return next.handle()

		console.log("userId", userId)

		await this.schoolLogsRepository.query(`SET @userId = ${userId}`)

		return next.handle()
	}
}
