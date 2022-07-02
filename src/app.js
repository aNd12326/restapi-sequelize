import express from "express";
import morgan from "morgan";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoute from "./routes/tasks.routes.js";

const app = express();

// middlewares
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoute);
app.use(morgan("dev"));

export default app;
