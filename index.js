import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import "./api/config/DBConnection.js";
import router from "./api/routers/auth/authroutes.js";
const PORT = 7500;
import { UserTable } from "./api/model/auth/authmodel.js";

// App Use

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Tables

UserTable.sync();

// Routes

app.use("/auth", router);

// Error Handling

// app.use

// PORT Listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
