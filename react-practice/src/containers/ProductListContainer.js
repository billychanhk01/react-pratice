import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ProductListContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  const fetchProducts = async () => {

    let result = {
      res:null,
      error:null,
      loading:true
    }
    try {
      result.res = await axios.get(
        "https://cdn.contentful.com/spaces/cbrojnj5jk1h/entries",
        {
          params: {
            access_token: `_fGCFUtl6cCaO8W7dBoEvkBS2kyUJFVtECd6TqFiNDw`,
            content_type: "product",
          },
        }
      );
    } catch (err) {
      result.error = err;
    }
    result.loading = false;
    console.log('feteched result', result);
    dispatch({ type: "fetchProducts", result: result });
  };
  
  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div>
      <ProductList
        products={products.products}
        onFetchProducts={fetchProducts}
      />
    </div>
  );
}

export default ProductListContainer;

// function ProductLists() {
//   const [res, loading, err, fetchData] = useContent(
//     "https://cdn.contentful.com/spaces/cbrojnj5jk1h/entries",
//     "product"
//   );

//   let products = res ?? [];

//   return err ? (
//     <h1>something went wrong</h1>
//   ) : (
//     <div>
//       <h1> {loading ? "Loading" : "Product List"}</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.fields.sku}>{product.fields.productName}</li>
//         ))}
//       </ul>
//       <button onClick={fetchData}>Call the API</button>
//     </div>
//   );
// }

// function useContent(url, contentType) {
//   const [res, setRes] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     try {
//       const result = await axios.get(url, {
//         params: {
//           access_token: `_fGCFUtl6cCaO8W7dBoEvkBS2kyUJFVtECd6TqFiNDw`,
//           content_type: contentType,
//         },
//       });

//       setRes(result?.data?.items ?? []);
//     } catch (err) {
//       setErr(err);
//     }
//     setLoading(false);
//   }, [url, contentType]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return [res, loading, err, fetchData];
// }

// export default ProductList;
