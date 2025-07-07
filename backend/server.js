import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.get("/message", (req, res) => {
  res.json({ message: "hello world" });
});

//use the static build of front end
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
// console.log(path.join(__dirname, '../frontend/dist/index.html'))
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
