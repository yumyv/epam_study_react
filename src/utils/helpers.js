export const getObjByKeyFromArr = (arr, key, value) => {
  return arr.find(item => item[key] === value);
};
