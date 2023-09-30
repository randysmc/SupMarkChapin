//configuramos express
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import tasksRoutes from "./routes/tasks.routes.js";
import employedRoutes from "./routes/employed.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => res.json({ message: "welcome to my API*" }));

app.use("/api", tasksRoutes);
app.use("/api", employedRoutes);
app.use("/api", authRoutes);

//Error
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
