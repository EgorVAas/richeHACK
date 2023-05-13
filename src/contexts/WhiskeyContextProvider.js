import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_WHISKEY } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const whiskeyContext = createContext();
export const useWhiskey = () => {
  return useContext(whiskeyContext);
};

const INIT_STATE = {
  productsWhiskey: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, productsWhiskey: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const WhiskeyContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios(`${JSON_API_WHISKEY}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_WHISKEY, newProduct);
    navigate("/whiskey");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_WHISKEY}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_WHISKEY}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_WHISKEY}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/whiskey");
  };

  // ! ///////////////////// filter ======================
  const location = useLocation();
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };


  
  const values = {
    addProduct,
    getProducts,
    productsWhiskey: state.productsWhiskey,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    fetchByParams,
  };
  return (
    <whiskeyContext.Provider value={values}>{children}</whiskeyContext.Provider>
  );
};

export default WhiskeyContextProvider;
