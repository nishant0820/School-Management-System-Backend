import schoolRouter from "./routes/school";
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use(express.json());
app.use("/api/v1", schoolRouter);