import axios from "axios";
import { useEffect, useState } from "react";

const Classic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Yükleniyor...</p>;

  if (error) return <p>Bir Hata Oluştu: {error}</p>;

  return (
    <div>
      {data.quotes.map((item) => (
        <p>
          <span>{item.quote}</span>
          <br />
          <b>{item.author}</b>
          <br />
          <br />
        </p>
      ))}
    </div>
  );
};

export default Classic;
