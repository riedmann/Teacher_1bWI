export interface CarCount {
  minute: number;
  count: number;
}

export interface TrafficData {
  district: string;
  totalCarsLastHour: number;
  timestamp: string;
  carsPerMinute: CarCount[];
}
