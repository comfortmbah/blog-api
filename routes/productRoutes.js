import express from "express"
import { getProducts, getProduct, createProduct, updateProduct, updateProductPartially } from "../controllers/productController.js";
import { asyncHandler } from "../utils/asyncHandler.js"


const router = express.Router();

router.get("/", asyncHandler(getProducts));

router.get("/:id", asyncHandler(getProduct));

router.post("/", asyncHandler(createProduct));

router.put("/:id", asyncHandler(updateProduct));

router.patch("/:id", asyncHandler(updateProductPartially));



export default router;