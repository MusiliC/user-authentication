const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("running");
});
