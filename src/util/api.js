export const getAllwords = async () => {
  const response = await fetch('https://random-word-api.herokuapp.com/all');
  return await response.json();
};
