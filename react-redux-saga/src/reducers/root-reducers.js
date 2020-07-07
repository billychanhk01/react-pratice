function rootReducer(state = { products: [], error: null, loading: true }, action) {
  switch (action.type) {
    case "GET_MANY_PRODUCT_REQUESTED":
      return { ...state, loading: true };
    case "GET_MANY_PRODUCT_SUCCEEDED":
      return { ...state, products: action.products, loading: false };
    case "GET_MANY_PRODUCT_FAILED":
      return { ...state, error: action.message, loading: false };
    default:
      return state;
  }
}

export default rootReducer;
