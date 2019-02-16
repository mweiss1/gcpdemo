const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const configRoutes = require("./routes");

app.use(bodyParser.json());
// configRoutes(app);

app.listen(3000, function() {
  console.log(" app listening on port 3000!");
});

app.get("/health", (req, res) => {
  console.log('req');
  res.json("OK");
});
