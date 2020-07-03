import React from "react";

function reducer(state = { products: [] }, action) {
  switch (action.type) {
    case "fetchProducts":
      return useContent('https://cdn.contentful.com/spaces/cbrojnj5jk1h/entries','product');
    default:
      return "";
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
}

export default reducer