import React, {
  PropsWithChildren,
  ReactNode,
  useReducer
} from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from "./reducers";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export type ProductsInCart = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  qty: number,
}

export const CartContext = React.createContext({
  cart: [],
  total: 0,
  qtyProducts: 0,
  products: [],
  addProductToCart: (product: ProductProps) => {},
  removeProductFromCart: (product: ProductProps) => {},
});

type Props = {
  children?: ReactNode;
};

const CartProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const [cartState, dispatch] = useReducer(
    shopReducer,
    { cart: [], total: 0, qtyProducts: 0 },
    () => {}
  );

  const addProductToCart = (product: ProductProps) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (product: ProductProps) => {
    dispatch({ type: REMOVE_PRODUCT, product: product });
  };

  // console.log(cartState);

  return (
    <CartContext.Provider
      //@ts-ignore
      value={{ ...cartState, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
