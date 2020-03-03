export const getObjByIdFromArr = (arr, id) => {
  return arr.find(item => item.id === parseInt(id));
};
