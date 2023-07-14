import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchdata, setFetchdata] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getQuotesFetch = async () => {
    setFetchdata({
      ...fetchdata,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setFetchdata({
      data,
      isLoading: false,
      hasError: null,
    });

    // console.log(data);
  };

  useEffect(() => {
    getQuotesFetch();
  }, [url]);

  return {
    data: fetchdata.data,
    isLoading: fetchdata.isLoading,
    hasError: fetchdata.hasError,
  };
};

export default useFetch;
