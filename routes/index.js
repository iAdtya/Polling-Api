import express from "express";

const router = express.Router();

import apiRouter from "./api/v1/index.js";
import app from "./api/v1/options.js";


router.use("/api", apiRouter);
// router.use("/options",app);



export default router;

