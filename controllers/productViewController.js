import { products } from "../data/products.js";

export const showProducts = (req, res) => {
  res.render("products/index", {
    products
  });
}