export const validateData = (email, password) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwdRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!emailRegex) return "Invalid email address";
  if (!passwdRegex) return "Invalid password";
};
