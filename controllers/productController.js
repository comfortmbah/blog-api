import { AppError } from "../utils/AppError.js";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 10.99,           
    category: "Electronics"
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: 15.99,
    category: "Clothing"
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: 20.99,
    category: "Books"
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is product 4",
    price: 25.99,
    category: "Electronics"
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is product 5",
    price: 30.99,
    category: "Clothing"
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is product 6",
    price: 35.99,
    category: "Books"
  },
  {
    id: 7,
    name: "Product 7",
    description: "This is product 7",
    price: 40.99,
    category: "Electronics"
  },
  {
    id: 8,
    name: "Product 8",
    description: "This is product 8",
    price: 45.99,
    category: "Clothing"
  },
  {
    id: 9,
    name: "Product 9",
    description: "This is product 9",
    price: 50.99,
    category: "Books"
  },    
  {
    id: 10,
    name: "Product 10",
    description: "This is product 10",
    price: 55.99,
    category: "Electronics"
  },
];

export const getProducts = (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  
  const total = products.length;
  const totalPages = Math.ceil(total / limit);
  
  if (page > totalPages) {
    throw new AppError("Page not found", 404);
  }
  
  const startIndex = (page - 1) * limit;
  const paginatedProducts = products.slice(startIndex, startIndex + limit);
  
  res.json({ page, limit, total, totalPages, products: paginatedProducts });
}

export const getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);

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