import { useEffect, useState } from "react";

import TrafficLight from "./TrafficLight";
import TrafficChart from "./TrafficChart";
import type { TrafficData } from "../types/TrafficData";

type Props = {};

const getColorFromCarCount = (
  totalCarsLastHour: number
): "red" | "orange" | "green" => {
  if (totalCarsLastHour > 900) return "red";
  if (totalCarsLastHour >= 500) return "orange";
  return "green";
};

export default function TrafficLightContainer({}: Props) {
  const [trafficData, setTrafficData] = useState<TrafficData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTraffic, setSelectedTraffic] = useState<TrafficData | null>(null);

  useEffect(() => {
    const fetchTrafficData = async () => {
      try {
        const response = await fetch("http://localhost:3000/statistics");
        if (!response.ok) {
          throw new Error("Failed to fetch traffic data");
        }
        const data = await response.json();
        // If data is a single object, wrap it in an array
        setTrafficData(Array.isArray(data) ? data : [data]);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      }
    };

    fetchTrafficData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchTrafficData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading traffic data...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      {trafficData.slice(0, 4).map((data, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <TrafficLight
            color={getColorFromCarCount(data.totalCarsLastHour)}
            onClick={() => setSelectedTraffic(data)}
          />
          <div className="text-center">
            <p className="font-semibold">{data.district}</p>
            <p className="text-sm text-gray-400">
              {data.totalCarsLastHour} cars/hour
            </p>
          </div>
        </div>
      ))}

      {selectedTraffic && (
        <TrafficChart
          data={selectedTraffic}
          onClose={() => setSelectedTraffic(null)}
        />
      )}
    </div>
  );
}
