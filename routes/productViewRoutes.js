import express from "express";
import { showProducts } from "../controllers/productViewController";

const router = express.Router();

router.get("/", showProducts);

export default router;