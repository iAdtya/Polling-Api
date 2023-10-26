import express from "express";
import { createOptions, add_vote ,deleteOpt,Vote_link} from "../../../controllers/options.js";

const app = express.Router();

app.post("/create", createOptions);
app.post("/:id/votes", add_vote);
app.delete("/delete",deleteOpt);
app.post("/link",Vote_link);


console.log("options.js");

export default app;
