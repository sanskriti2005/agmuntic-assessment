import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Fetch products from FakeStore API
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;

    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

// Add product to cart
export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

// Remove product from cart
export const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
};
