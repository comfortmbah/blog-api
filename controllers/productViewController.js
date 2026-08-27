import { products } from "../data/products.js";

export const showProducts = (req, res) => {
  res.render("products/index", {
    products
  });
}

export const showCreateProductForm = (req, res) => {
  res.render("products/new", {
    errors: [],
    formData: {}
  });
}

export const createProductFromForm = (req, res) => {
  console.log(req.body);

  const { name, price, category } = req.body;

  const errors = [];

  if (!name || name.trim() === "") {
    errors.push("Name is required");
  }

  if (!price || Number(price) <= 0) {
    errors.push("Price must be greater than 0");
  }

  if (!category || category.trim() === "") {
    errors.push("Category is required");
  }

  if (errors.length > 0) {
    return res.status(400).render("products/new", {
      errors, formData: req.body
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price: Number(price),
    category
  };

  products.push(newProduct);

  res.redirect("/products");
}