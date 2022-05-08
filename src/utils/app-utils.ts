export const authenticate = (data: any, next: () => any) => {
  if (typeof window.localStorage !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

const outlineType = (showPassword: boolean) => {
  if (showPassword) return "text";
  return "password";
};

export { outlineType };
