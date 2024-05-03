import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { BroadcastChannelsController } from "./broadcast-channels.controller"
import { BroadcastChannelsService } from "./broadcast-channels.service"
import { BroadcastChannel, BroadcastChannelToUser, Post } from "./entities"

@Module({
	imports: [TypeOrmModule.forFeature([BroadcastChannel, BroadcastChannelToUser, Post])],
	controllers: [BroadcastChannelsController],
	providers: [BroadcastChannelsService]
})
export class BroadcastChannelsModule {}
