import express from "express";
import { getPosts, getPost } from "../controllers/postControllers.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(getPosts));

router.get("/:id", asyncHandler(getPost));

export default router;