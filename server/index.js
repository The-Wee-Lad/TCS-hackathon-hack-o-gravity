import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import { connectDb } from "./db/db.js";
dotenv.config()
import swaggerUi from "swagger-ui-express"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger-output.json");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

import userRouter from "./routes/user.Route.js"
import complainRouter from "./routes/complain.Routes.js"
import departmentRouter from "./routes/department.Routes.js"
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/user", userRouter);
app.use("/complain", complainRouter);
app.use("/department", departmentRouter);

connectDb()
  .then(() => {
    console.log("db connected");
    app.listen(8000, () => {
      console.log("App Is listening at port 8000!");
    })
  })
  .catch((err) => {
    console.log("db connection error", err, "Closing ")
  });


app.use("/", (req, res) => {
  res.status(201).json({ message: "health check is complete" })
})
