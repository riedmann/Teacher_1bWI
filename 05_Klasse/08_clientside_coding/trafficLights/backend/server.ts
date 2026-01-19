import express, { Request, Response } from "express";
import { TrafficDataFactory } from "./TrafficDataFactory";

const app = express();
const PORT = 3000;

app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// GET /statistics - Returns a list of traffic data
app.get("/statistics", (req: Request, res: Response) => {
  const trafficDataList = TrafficDataFactory.generateTrafficDataList();
  res.json(trafficDataList);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
