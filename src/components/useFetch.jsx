import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const[loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

      const fetchData = async () => {
        try
        {
          const response = await axios.get(url)
          setData(response.data)
        }
       catch(error) 
       {
        setError(error.message)
       }
       finally
       {
        setLoading(false)
       }
      }
      fetchData();
    // axios
    // .get(url)
    // .then(res => {
    //   setData(res.data);
    //   setLoading(false); 
    // })
    // .catch(error => {
    //   setError(error.message)
    //   setLoading(false);
    // })

  },[url])

  return {data, loading, error}
}


export default useFetch