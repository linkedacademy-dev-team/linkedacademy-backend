import { Injectable } from "@nestjs/common"

@Injectable()
export class GeolocationUtil {
	convertKilometersToMeters(kilometers: number): number {
		return kilometers * 1000
	}

	normalizePointGeometry(point: string): number[] {
		return point.replace("POINT(", "").replace(")", "").split(" ").map(Number)
	}
}
