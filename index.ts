import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import mahasiswaRoutes from "./src/routes/mahasiswa.routes.js";
import koordinatorRoutes from "./src/routes/koordinator.routes";

const app = express();
const port = 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use(authRoutes);
app.use(mahasiswaRoutes);
app.use(koordinatorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});