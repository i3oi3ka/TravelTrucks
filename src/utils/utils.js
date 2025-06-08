export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const addSpace = (string, lastChar = 1) => {
  const length = string.length;
  console.log(length);
  return (
    string.slice(0, length - lastChar) + " " + string.slice(length - lastChar)
  );
};
