import { PREFIX } from "@utils/env.parser";
export const storeToLocalStorage = (key, value) => {
  const newKey = `${PREFIX}_${key}`;
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }

  localStorage.setItem(newKey, value);
};

export const readFromLocalStorage = (key) => {
  const newkey = `${PREFIX}_${key}`;
  const value = localStorage.getItem(newkey);

  if (!value) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch (e) {
    return value;
  }
};
