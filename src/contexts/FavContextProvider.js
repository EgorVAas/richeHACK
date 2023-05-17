import { createContext, useContext, useReducer } from "react";
import { FAV } from "../helpers/consts";
import { calcSubPrice, calcTotalPrice, getCountProductsInFav } from "../helpers/functions";

export const favContext = createContext();
export const useFav = () => useContext(favContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("fav")),
  cartLength: getCountProductsInFav(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAV.GET_FAV:
      return { ...state, cart: action.payload };

    case FAV.GET_FAV_LENGTH:
      return { ...state, cartLength: action.payload };

    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("fav"));

    if (!cart) {
      localStorage.setItem(
        "fav",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: FAV.GET_FAV,
      payload: cart,
    });
  };

  const addProductToFav = (product) => {
    let cart = JSON.parse(localStorage.getItem("fav"));

    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id != product.id
      );
    }
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("fav", JSON.stringify(cart));
    dispatch({ type: FAV.GET_FAV, payload: cart });
  };

  const checkProductInFav = (id) => {
    let cart = JSON.parse(localStorage.getItem("fav"));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("fav"));

    cart.products = cart.products.map((product) => {
      if (product.item.id == id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("fav", JSON.stringify(cart));
    dispatch({
      type: FAV.GET_FAV,
      payload: cart,
    });
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("fav"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("fav", JSON.stringify(cart));

    dispatch({
      type: FAV.GET_FAV,
      payload: cart,
    });
  };

  const values = {
    getCart,
    addProductToFav,
    checkProductInFav,
    cart: state.cart,
    changeProductCount,
    deleteCartProduct,
  };
  return <favContext.Provider value={values}>{children}</favContext.Provider>;
};

export default FavContextProvider;
