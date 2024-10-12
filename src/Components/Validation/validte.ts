// Validation.ts
export const validate = (
  email: string,
  password: string,
  name: string,
  setError: (error: { email: string; password: string; name: string }) => void
) => {
  let isValid = true;
  let newError = { email: "", password: "", name: "" };

  // Name validation
  if (!name || name.length < 2) {
    newError.name = "Please enter a valid name (at least 2 characters)";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    newError.email = "Please enter a valid email address";
    isValid = false;
  }

  // Password validation
  if (!password || password.length < 6) {
    newError.password = "Password must be at least 6 characters long";
    isValid = false;
  }

  setError(newError);
  return isValid;
};

// Login validation
export const validateLogin = (
  email: string,
  password: string,
  setError: (error: { email: string; password: string }) => void
) => {
  let isValid = true;
  let newError = { email: "", password: "" };

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    newError.email = "Please enter a valid email address";
    isValid = false;
  }

  // Password validation
  if (!password || password.length < 6) {
    newError.password = "Password must be at least 6 characters long";
    isValid = false;
  }

  setError(newError);
  return isValid;
};
