const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// New
const path = require("path");

const router = require("./routes");
require("./models/db");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../frontend/dist"))); //new

// New
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use("/api/v1", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
