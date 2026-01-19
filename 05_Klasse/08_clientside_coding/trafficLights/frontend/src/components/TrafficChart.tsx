import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { TrafficData } from "../types/TrafficData";

interface TrafficChartProps {
  data: TrafficData;
  onClose: () => void;
}

export default function TrafficChart({ data, onClose }: TrafficChartProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {data.district}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total: {data.totalCarsLastHour} cars/hour | {data.timestamp}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data.carsPerMinute}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="minute"
              label={{ value: "Minute", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              label={{ value: "Cars", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              strokeWidth={2}
              name="Cars per minute"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
