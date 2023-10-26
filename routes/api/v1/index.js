import express from "express";

import {
  getQuestions,
  createQuestion,
  deleteQuestion,
} from "../../../controllers/que.js";

import app from  "./options.js"
const apiRouter = express.Router();

apiRouter.get("/questions", getQuestions);
apiRouter.post("/create", createQuestion);
apiRouter.delete("/delete", deleteQuestion);
apiRouter.use("/options", app);

// console.log("apiRouter", apiRouter);

export default apiRouter;
