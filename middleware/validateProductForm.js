export const validateProductForm = (view) => {
  return (req, res, next) => {
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
      return res.status(400).render(view, {
        errors, 
        formData: req.body,
        productId: req.params.id
      });
    }
    
    next();
  }
}