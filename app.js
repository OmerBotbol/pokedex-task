const express = require("express");
const cors = require("cors");
const api = require("./routes");
const path = require('path')
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("/api", api);

module.exports = app;
