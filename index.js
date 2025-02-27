const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./api/routers/auth/authroutes");
const PORT = 7500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.use("/auth", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
