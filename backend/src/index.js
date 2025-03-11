import express from "express";
import cors from "cors";
import articleRouter from "./routes/article/crud.js";
import commentRouter from "./routes/comment/crud.js";
import filterRouter from "./routes/filter/routes.js";

const PORT = 5000

const app = new express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use("/", articleRouter);
app.use("/article", commentRouter);
app.use("/", filterRouter);

app.listen(PORT, () => console.log('Server started on port ' + PORT));
