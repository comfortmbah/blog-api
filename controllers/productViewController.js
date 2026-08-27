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

  const newProduct = {
    id: products.length + 1,
    name: name.trim(),
    price: Number(price),
    category: category.trim()
  };

  products.push(newProduct);

  res.redirect("/products");
}

export const showEditProductForm = (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.render("products/edit", { product });
}