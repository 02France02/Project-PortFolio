import React, { useEffect, useState } from "react";

function useFetchFilms() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await fetch(`https://fakestoreapi.com/products/`);
      const respData = await resp.json();
      setData(respData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data
  }
}

export default useFetchFilms;
