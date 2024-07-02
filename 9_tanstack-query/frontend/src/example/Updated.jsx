import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// sorgu için kullanılack fonksiyon
const getQuotes = () => axios.get("https://dummyjson.com/quotes");

const Updated = () => {
  // get istekleri ile olan sorguları gerçekleştirmemizi sağlar
  // useQuery yapılan isteğin bütün detaylarını retrun eder
  const { isLoading, error, data } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });

  if (isLoading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu: {error.message}</p>;

  return (
    <div>
      {data.data.quotes.map((i) => (
        <p>
          <span>{i.quote}</span>
          <br />
          <b>{i.author}</b>

          <br />
          <br />
        </p>
      ))}
    </div>
  );
};

export default Updated;
