import { Injectable } from "@nestjs/common"

@Injectable()
export class GeolocationUtil {
	normalizePointGeometry(point: string): number[] {
		return point.replace("POINT(", "").replace(")", "").split(" ").map(Number)
	}
}
