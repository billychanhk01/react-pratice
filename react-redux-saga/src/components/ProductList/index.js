import React from "react";

const ProductList = ({ products, error, loading, onFetchProducts }) => {
  return error ? (
    <h1>something went wrong</h1>
  ) : (
    <div>
      <h1> {loading ? "Loading" : "Product List"}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.fields.sku}>{product.fields.productName}</li>
        ))}
      </ul>
      <button onClick={onFetchProducts}>Call the API</button>
    </div>
  );
};

export default ProductList;
