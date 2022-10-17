import { Router } from "express";
import agustinRouter from "./agustin.routes.js";

const mainRouter = new Router()

export default mainRouter

mainRouter.use('/api/v1', agustinRouter)
