import { useState, useEffect, useCallback } from "react";

function rootReducer(state = { products: [] }, action) {
  switch (action.type) {
    case "fetchProducts":
      return { ...state, products: action.items };
    default:
      return state;
  }
}


export default rootReducer;
