import express, { Request, Response } from "express";
import { getLogger } from "./utils/loggerUtil";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const logger = getLogger("startup");

logger.info("Starting server...");

logger.info("Configured port number: [" + process.env.PORT + "]");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

app.get("/api/v1/hello", (req: Request, res: Response) => {
  const helloLogger = getLogger("helloEndpoint");

  helloLogger.info("Saying hello to the world...");

  res.send({
    message: "Hello, world!",
  });
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});

logger.info("Starting server...");
