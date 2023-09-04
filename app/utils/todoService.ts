export const getTodos = async () => {
  const response = await fetch("/api");
  return response.json();
};
