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
  res.json(products);
}