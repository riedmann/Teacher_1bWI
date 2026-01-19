import { TrafficData, CarCount } from "./TrafficData";

export class TrafficDataFactory {
  /**
   * Generates a list of traffic data for multiple districts
   */
  public static generateTrafficDataList(): TrafficData[] {
    return [
      {
        district: "Schoren",
        totalCarsLastHour: 847,
        timestamp: new Date().toISOString(),
        carsPerMinute: this.generateCarsPerMinute([
          12, 15, 14, 18, 13, 16, 11, 19, 14, 17,
        ]),
      },
      {
        district: "Hauptbahnhof",
        totalCarsLastHour: 1243,
        timestamp: new Date().toISOString(),
        carsPerMinute: this.generateCarsPerMinute([
          20, 22, 19, 25, 21, 24, 18, 26, 23, 20,
        ]),
      },
      {
        district: "Zentrum",
        totalCarsLastHour: 956,
        timestamp: new Date().toISOString(),
        carsPerMinute: this.generateCarsPerMinute([
          15, 17, 16, 19, 14, 18, 13, 20, 16, 15,
        ]),
      },
      {
        district: "Berg",
        totalCarsLastHour: 700,
        timestamp: new Date().toISOString(),
        carsPerMinute: this.generateCarsPerMinute([
          15, 17, 6, 9, 4, 18, 13, 20, 16, 15,
        ]),
      },
    ];
  }

  /**
   * Generates 60 minutes of car count data based on a pattern
   * @param pattern Array of base values to repeat and randomize
   * @returns Array of CarCount objects for 60 minutes
   */
  private static generateCarsPerMinute(pattern: number[]): CarCount[] {
    const data: CarCount[] = [];
    for (let i = 0; i < 60; i++) {
      data.push({
        minute: i,
        count: pattern[i % pattern.length] + Math.floor(Math.random() * 5) - 2,
      });
    }
    return data;
  }
}
