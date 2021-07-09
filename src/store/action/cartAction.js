export const addToCart = (item) => {
  console.log(item);
  return {
    type: "ADD",
    payload: item,
  };
};
