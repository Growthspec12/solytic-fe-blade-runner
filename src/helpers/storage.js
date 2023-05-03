export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};
