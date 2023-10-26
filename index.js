import express from "express";
import routes from "./routes/index.js";

import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
