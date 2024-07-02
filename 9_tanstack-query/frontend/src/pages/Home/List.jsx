import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPlaces } from "../../api";
import Loader from "../../components/Loader";
import Card from "./Card";
import Error from "../../components/Error";

const List = () => {
  // places sorgusu
  const { isLoading, error, data } = useQuery({
    queryKey: ["places"],
    queryFn: getPlaces,
    retry: 2,
  });

  // kurulum
  const queryClient = useQueryClient();

  // places sorgusunu tekrar çalıştırmaya yarayan fonksiyon
  const retry = () => {
    queryClient.invalidateQueries({ queryKey: ["places"] });
  };

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki hedefler</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} retry={retry} />
        ) : (
          <div className="grid gap-5  mt-5">
            {data.places.map((place) => (
              <Card place={place} key={place.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
