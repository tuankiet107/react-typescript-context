/* eslint-disable import/first */

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
import { ProductProps } from "./CartProvider";

// initState
export const initStateCart = {
  cart: [],
  total: 0,
  qtyProducts: 0,
};

export const shopReducer = (state: any = initStateCart, action: any) => {
  let productIndex;
  switch (action.type) {
    case ADD_PRODUCT:
      productIndex = state.cart.findIndex(
        (item: ProductProps) => item.id === action.product.id
      );
      // product is existing in cart
      if (productIndex > -1) {
        const quantityProductExist = state.qtyProducts + 1;
        state.cart[productIndex].qty += 1;
        return {
          ...state,
          cart: [ ...state.cart ],
          qtyProducts: quantityProductExist, // số lượng tổng giỏ hàng
          total: state.cart[productIndex].price * quantityProductExist, // giá của tổng giỏ hàng
        };
      } else {
        // product is NOT exsting in cart
        const quantity = 1;
        const newProduct = {
          ...action.product,
          qty: quantity,
        }
        return {
          ...state,
          cart: [...state.cart, newProduct],
          qtyProducts: state.qtyProducts + quantity,
          total: state.total + action.product.price,
        };
      }
    case REMOVE_PRODUCT:
      productIndex = state.cart.findIndex(
        (item: ProductProps) => item.id === action.product.id
      );
      if(productIndex > -1){
        const qtyProductSelected = state.cart[productIndex].qty;
        const priceProductSelected = state.cart[productIndex].price;
        state.cart.splice(productIndex,1);
        return {
          ...state,
          cart: [ ...state.cart ],
          qtyProducts: state.qtyProducts - qtyProductSelected,
          total: state.total - (priceProductSelected * qtyProductSelected)
        }
      }
      return state;
    default:
      // return state;
      throw new Error("Invalid action.");
  }
};
