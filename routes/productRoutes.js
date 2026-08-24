import express from "express"
import { getProducts, getProduct, createProduct } from "../controllers/productController.js";
import { asyncHandler } from "../utils/asyncHandler.js"


const router = express.Router();

router.get("/", asyncHandler(getProducts));
router.get("/:id", asyncHandler(getProduct));
router.post("/", asyncHandler(createProduct));

export default router;