import express from "express";
import { getPosts, getPost, createPost } from "../controllers/postControllers.js";


const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

export default router;