import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.slip))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
}
