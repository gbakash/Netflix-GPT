export const checkValidation = (name, email, password, isSignIn) => {

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // Skip name validation when signing in
  if (!isSignIn) {
    const isNameValid = name && /^[A-Za-z\s]{3,50}$/.test(name.trim());
    if (!isNameValid) return "Invalid Name";
  }

  if (!isEmailValid) return "Invalid Email Id";
  if (!isPasswordValid) return "Invalid Password";
  return null;
};
