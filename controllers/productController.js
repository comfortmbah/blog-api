import { AppError } from "../utils/AppError.js";
import { getProductQuery, findProductById } from "../utils/productQuery.js";
import { products } from "../data/products.js";



export const getProducts = (req, res) => {
  const page = Number(req.query.page) || 1;

  if (page < 1) {
    throw new AppError("Page must be greater than 0", 400);
  }

  const result = getProductQuery(products, req.query);

  if (result.totalPages > 0 && page > result.totalPages) {
    throw new AppError("Page not found", 404);
  }

  res.json(result);
}
  
export const getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = findProductById(products, id);

  if (!product) {
    throw new AppError("Product Not Found", 404);
  }

  res.json(product);
}

export const createProduct = (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    throw new AppError("Name, description, price and category are required", 404);
  }

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    category,
  };

  products.push(newProduct);

  res.status(201).json({ message: "Product created successfully!", newProduct });
}

export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new AppError("Post not found", 404);
  }

  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    throw new AppError("Name, description, price and category are required", 400);
  }

  product.name = name;
  product.description = description;
  product.price = price;
  product.category = category;

  res.json({ message: "Product updated successfully!", product }); 
}

export const updateProductPartially = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const { name, description, price, category } = req.body;

  if (name !== undefined) {
    product.name = name;
  }

  if (description !== undefined) {
    product.description = description;
  }

  if (price !== undefined) {
    product.price = price;
  }

  if (category !== undefined) {
    product.category = category;
  }

  res.json({ message: "Product updated successfully", product});
}

export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    throw new AppError("Product not found", 404)
  }

  products.splice(index, 1);

  res.json({ message: "Product deleted successfully"});
}