import express from "express";
import { showProducts, showCreateProductForm } from "../controllers/productViewController.js";

const router = express.Router();

router.get("/", showProducts);

router.get("/new", showCreateProductForm);

export default router;