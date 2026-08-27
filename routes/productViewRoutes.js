import express from "express";
import { showProducts, showCreateProductForm, createProductFromForm, showEditProductForm } from "../controllers/productViewController.js";
import { validateProductForm } from "../middleware/validateProductForm.js";

const router = express.Router();

router.get("/", showProducts);

router.get("/new", showCreateProductForm);

router.get("/:id/edit", showEditProductForm);

router.post("/", validateProductForm, createProductFromForm);

export default router;  