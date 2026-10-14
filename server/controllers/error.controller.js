// Return a readable message for MongoDB and Mongoose errors.
const getErrorMessage = (err) => {
  if (!err) {
    return "Something went wrong";
  }

  // Handle MongoDB duplicate-key errors.
  if (err.code === 11000 || err.code === 11001) {
    return getUniqueErrorMessage(err);
  }

  // Handle Mongoose validation errors.
  if (err.errors) {
    const messages = Object.values(err.errors)
      .map((error) => error.message)
      .filter(Boolean);

    if (messages.length > 0) {
      return messages[0];
    }
  }

  // Use the original error message when available.
  if (err.message) {
    return err.message;
  }

  return "Something went wrong";
};

// Return a readable duplicate-key error message.
const getUniqueErrorMessage = (err) => {
  const fieldName =
    err.keyValue && Object.keys(err.keyValue).length > 0
      ? Object.keys(err.keyValue)[0]
      : "field";

  return `${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
    1
  )} already exists`;
};

// Export the error helper used by the CRUD controllers.
export default { getErrorMessage };