import express from "express";
import { getPosts, getPost, createPost, updatePost, updatePostPartially } from "../controllers/postControllers.js";


const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.patch("/:id", updatePostPartially);

export default router;