import create from "zustand";
import { ProductType } from "./../containers/Home/Home";

interface AuthStore {
  user: any;
  isLogin: boolean;
  falseIsLogin: () => any;
  trueIsLogin: () => any;
  setUser: (user: any) => any;
}

interface CartStore {
  products: ProductType[];
  productsCounter: number;
  cartProducts: ProductType[];
  handleProductsCounter: () => void;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  removeCurrentProduct: (product: ProductType) => void;
}

const useAuthStore = create<AuthStore>(
  (set): AuthStore => ({
    user: undefined,
    setUser: (user) => set({ user: user }),
    isLogin: false,
    falseIsLogin: () => set(() => ({ isLogin: false })),
    trueIsLogin: () => set(() => ({ isLogin: true })),
  })
);

const useCartStore = create<CartStore>(
  (set): CartStore => ({
    products: [],
    cartProducts: [],
    productsCounter: 0,
    handleProductsCounter: () =>
      set((state) => {
        {
          const cartLength = state.cartProducts.reduce((ack, currentItem) => {
            return ack + currentItem.amount;
          }, 0);

          return { productsCounter: cartLength };
        }
      }),
    addToCart: (product: ProductType) => {
      set((state) => {
        const isExistProduct = state.cartProducts.find(
          (item) => item.id === product.id
        );

        if (isExistProduct) {
          const currentCart = state.cartProducts.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + 1 } : item
          );

          return { cartProducts: currentCart };
        }

        return {
          cartProducts: [...state.cartProducts, { ...product, amount: 1 }],
        };
      });
    },

    removeCurrentProduct: (product: ProductType) => {
      set((state) => {
        const currentCart = state.cartProducts.filter(
          (item) => item.id !== product.id
        );

        return { cartProducts: [...currentCart] };
      });
    },
    removeFromCart: (product: ProductType) => {
      set((state) => {
        const currentCart = state.cartProducts
          .map((item) =>
            item.id === product.id ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount > 0);

        return { cartProducts: [...currentCart] };
      });
    },
  })
);

export { useAuthStore, useCartStore };
