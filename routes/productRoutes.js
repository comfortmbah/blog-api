import express from "express"
import { getProducts, getProduct } from "../controllers/productController.js";
import { asyncHandler } from "../utils/asyncHandler.js"


const router = express.Router();

router.get("/", asyncHandler(getProducts));
router.get("/:id", asyncHandler(getProduct));

export default router;