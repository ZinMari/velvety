import { create } from "zustand";

type TCartItem = {
  item: TProduct;
  quantity: number;
};

type TState = {
  cart: TCartItem[];
};

type TActions = {
  addToCart: (item: TProduct, quantity: number) => void;
  removeFromCart: (item: TProduct) => void;
};

const INITIAL_STATE: TState = {
  cart: [],
};

export const useCartStore = create<TState & TActions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  addToCart: (product: TProduct, quantity: number) => {
    const cart = get().cart;
    const cartItem = cart.find((cartItem) => cartItem.item.id === product.id);
    if (cartItem) {
      const updateCart = cart.map((cartItem) =>
        cartItem.item.id === product.id
          ? {
              item: { ...cartItem.item },
              quantity: (cartItem.quantity as number) + quantity,
            }
          : cartItem
      );

      set((state) => ({
        cart: updateCart,
      }));
    } else {
      const updatedCart = [...cart, { item: { ...product }, quantity: 1 }];
      set((state) => ({
        cart: updatedCart,
      }));
    }
  },
  removeFromCart(product: TProduct) {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.item.id !== product.id),
    }));
  },
}));
