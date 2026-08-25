

export const getProductQuery = (products, query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  
  const { category, search, sort } = query;

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;
  const searchProducts = search ? filteredProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())) : filteredProducts;
  
  let sortedProducts = [...searchProducts];

  if (sort === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "-price") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const total = sortedProducts.length;
  const totalPages = Math.ceil(total / limit);

  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;
  
  if (page > totalPages && totalPages > 0) {
    throw new AppError("Page not found", 404);
  }
  
  const startIndex = (page - 1) * limit;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + limit);
  
  return { page, limit, total, totalPages, hasNextPage, hasPreviousPage, products: paginatedProducts };
}



