import { Controller } from "@nestjs/common"

import { BroadcastChannelsService } from "./broadcast-channels.service"

@Controller("broadcast-channels")
export class BroadcastChannelsController {
	constructor(private readonly broadcastChannelsService: BroadcastChannelsService) {}
}
