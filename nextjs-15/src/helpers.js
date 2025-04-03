export const getErrors = ({ title, price }) => {
  const errors = {};

  if (!title) {
    errors.title = "Title is required.";
  }

  if (title && title.length < 3) {
    errors.title = "Title must have more than 2 characters.";
  }

  if (!Number.isFinite(parseInt(price))) {
    errors.price = "Price must be greater than 0.";
  }

  return errors;
};
