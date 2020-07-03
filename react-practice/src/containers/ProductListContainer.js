
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductList from "../components/ProductList"

function ProductListContainer() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
      <div>
          <ProductList products={products} onFetchProducts={() => dispatch({ type: "fetchProducts"})}/>
      </div>
  )
}






function ProductLists() {
  const [res, loading, err, fetchData] = useContent(
    "https://cdn.contentful.com/spaces/cbrojnj5jk1h/entries",
    "product"
  );

  let products = res ?? [];

  return err ? (
    <h1>something went wrong</h1>
  ) : (
    <div>
      <h1> {loading ? "Loading" : "Product List"}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.fields.sku}>{product.fields.productName}</li>
        ))}
      </ul>
      <button onClick={fetchData}>Call the API</button>
    </div>
  );
}

function useContent(url, contentType) {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get(url, {
        params: {
          access_token: `_fGCFUtl6cCaO8W7dBoEvkBS2kyUJFVtECd6TqFiNDw`,
          content_type: contentType,
        },
      });

      setRes(result?.data?.items ?? []);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  }, [url, contentType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [res, loading, err, fetchData];
}

export default ProductList;
