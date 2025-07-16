import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import searchRouter from "./routes/search.js"
import adminRouter from "./routes/admin.js"
import cors from "cors"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors())
app.use(express.json());
app.get("/message", (req, res) => {
  res.json({ message: "hello world" });
});

//use the static build of front end
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
app.use(searchRouter)
app.use("/admin",adminRouter)

// console.log(path.join(__dirname, '../frontend/dist/index.html'))
const PORT = 3001;
// insertData(entry)
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
