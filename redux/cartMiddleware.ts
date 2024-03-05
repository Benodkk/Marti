// cartMiddleware.ts
export const cartMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  if (action.type === "cart/addItem" || action.type === "cart/removeItem") {
    const currentCartItems = store.getState().cart.items;
    localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
  }

  return result;
};
