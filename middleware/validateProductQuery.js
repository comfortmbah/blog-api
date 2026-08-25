import { AppError } from "../utils/AppError.js";

const allowedCategories = ["Electronics", "Books", "Clothing"];

export const validateProductQuery = (req, res, next) => {
  const { page, limit, sort, category } = req.query;

  if (page !== undefined && (!Number.isInteger(Number(page)) || Number(page) < 1)) {
    throw new AppError("Page must be a positive integer", 400);
  }

  if (limit !== undefined && (!Number.isInteger(Number(limit)) || Number(limit) < 1)) {
    throw new AppError("Limit must be a positive integer", 400);
  }

  if (limit !== undefined && Number(limit) > 100) {
    throw new AppError("Limit cannot exceed 100", 400);
  }

  const allowedSorts = ["price", "-price"];  

  if (sort !== undefined && !allowedSorts.includes(sort)) {
    throw new AppError("Invalid sort field", 400);
  }

  if (category !== undefined && !allowedCategories.includes(category)) {
    throw new AppError("Invalid category", 400);
  }

  next();
}; 