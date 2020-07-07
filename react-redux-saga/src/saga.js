import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProducts() {
   try {
      const result = yield axios.get(
        "https://cdn.contentful.com/spaces/cbrojnj5jk1h/entries",
        {
          params: {
            access_token: `_fGCFUtl6cCaO8W7dBoEvkBS2kyUJFVtECd6TqFiNDw`,
            content_type: "product",
          },
        }).then((res) => res.data.items);
      yield put({type: "GET_MANY_PRODUCT_SUCCEEDED", products: result?? {}});
   } catch (e) {
      yield put({type: "GET_MANY_PRODUCT_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("GET_MANY_PRODUCT_REQUESTED", fetchProducts);
}

export default mySaga;