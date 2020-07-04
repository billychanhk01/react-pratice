import React from 'react';


const ProductList = (products, onFetchProducts) => {
    console.log(onFetchProducts);

    products = products.products;
    console.log(products);
    return products.products?.err ? (
      <h1>something went wrong</h1>
    ) : (
      <div>
        <h1> {products.loading ? "Loading" : "Product List"}</h1>
        <ul>
          {products?.map((product) => (
            <li key={product.fields.sku}>{product.fields.productName}</li>
          ))}
        </ul>
        <button onClick={onFetchProducts}>Call the API</button>
      </div>
    );
  }
  
  export default ProductList;
  