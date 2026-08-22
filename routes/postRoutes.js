import express from "express";
import { getPosts, getPost, createPost, updatePost, updatePostPartially, deletePost } from "../controllers/postControllers.js";
import { asyncHandler } from "../utils/asyncHandler.js"


const router = express.Router();

router.get("/", asyncHandler(getPosts));

router.get("/:id", asyncHandler(getPost));

router.post("/", asyncHandler(createPost));

router.put("/:id", asyncHandler(updatePost));

router.patch("/:id", asyncHandler(updatePostPartially));

router.delete("/:id", asyncHandler(deletePost));

export default router;