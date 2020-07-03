import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = (products, onFetchProducts) => {
    return products.err ? (
      <h1>something went wrong</h1>
    ) : (
      <div>
        <h1> {products.loading ? "Loading" : "Product List"}</h1>
        <ul>
          {products.data.items.map((product) => (
            <li key={product.fields.sku}>{product.fields.productName}</li>
          ))}
        </ul>
        <button onClick={onFetchProducts}>Call the API</button>
      </div>
    );
  }
  
  export default ProductList;
  