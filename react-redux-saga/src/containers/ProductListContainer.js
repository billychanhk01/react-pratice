import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { getProducts } from "../actions";

function ProductListContainer({ products, error, loading, getProducts }) {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} loading={loading} error={error} onFetchProducts={getProducts} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  error: state.error,
  loading: state.loading,
});

const mapDispatchToProps = {
  getProducts: getProducts,
};

ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
export default ProductListContainer;
