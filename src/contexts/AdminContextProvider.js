import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_ADMIN } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const adminContext = createContext();
export const useAdmin = () => {
  return useContext(adminContext);
};

const INIT_STATE = {
  productsAdmin: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, productsAdmin: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const AdminContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    const { data } = await axios(`${JSON_API_ADMIN}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_ADMIN, newProduct);
    navigate("/admin-alco");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_ADMIN}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_ADMIN}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_ADMIN}/${newProduct.id}`, newProduct);
    getProducts();
    navigate("/admin-alco");
  };

  const values = {
    addProduct,
    getProducts,
    productsAdmin: state.productsAdmin,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
  };
  return (
    <adminContext.Provider value={values}>{children}</adminContext.Provider>
  );
};

export default AdminContextProvider;
