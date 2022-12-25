export const addItemsToCart = () => {
  console.log("Add items action creator called");
  return {
    type: "ADD_ITEM",
    payload: 1,
  };
};

export const removeItemsFromCart = () => {
  return {
    type: "SUBTRACT_ITEM",
    payload: 1,
  };
};
