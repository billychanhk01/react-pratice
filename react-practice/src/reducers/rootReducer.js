
function rootReducer(state = { products: { res: null, err: null, loading: true} }, action) {
  switch (action.type) {
    case "fetchProducts":
        console.log('check', action.result);
      return { ...state, products: action.result };
    default:
      return state;
  }
}


export default rootReducer;
