import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error('Could not fetch the data from the resource.');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
        var count = 0;
        for(var i=0; i<data.lenght; i++) {
          count += data[i].status;
        }
        setActive(data.lenght - count);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      })
  }, [url]);

  return {error, isPending, data, active};
}
 
export default useFetch;