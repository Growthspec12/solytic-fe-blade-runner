export const getItem = (key: string): string => {
  return JSON.parse(localStorage.getItem(key));
};

export const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
