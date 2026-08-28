import express from "express";
import { showProducts, showCreateProductForm, createProductFromForm, showEditProductForm, updateProductFromForm, deleteProductFromView } from "../controllers/productViewController.js";
import { validateProductForm } from "../middleware/validateProductForm.js";

const router = express.Router();

router.get("/", showProducts);

router.get("/new", showCreateProductForm);

router.get("/:id/edit", showEditProductForm);

router.post("/", validateProductForm("products/new"), createProductFromForm);

router.post("/:id/edit", validateProductForm("products/edit"), updateProductFromForm);

router.post("/:id/delete", deleteProductFromView);

export default router;  