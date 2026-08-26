import express from "express";
import { showProducts, showCreateProductForm, createProductFromForm } from "../controllers/productViewController.js";

const router = express.Router();

router.get("/", showProducts);

router.get("/new", showCreateProductForm);

router.post("/", createProductFromForm);

export default router;