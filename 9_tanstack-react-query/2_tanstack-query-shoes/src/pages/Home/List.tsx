import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { Shoe } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/Card";

const List = () => {
  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes"],
    queryFn: () => api.get("/shoes").then((res) => res.data),
  });

  return (
    <div className="col-span-4 lg:col-span-3 ">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : data ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center">Aranılan kriterlere uygun ürün bulunamadı</p>
      )}
    </div>
  );
};

export default List;
