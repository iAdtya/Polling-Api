import express from "express";
import { createOptions, add_vote ,deleteOpt} from "../../../controllers/options.js";

const app = express.Router();

app.post("/create", createOptions);
app.post("/:id/votes", add_vote);
app.delete("/delete/:id",deleteOpt);

console.log("options.js");

export default app;
