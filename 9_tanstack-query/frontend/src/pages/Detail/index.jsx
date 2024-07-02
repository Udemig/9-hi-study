import { useQuery } from "@tanstack/react-query";
import { getPlace } from "../../api";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Features from "./Features";
import Rating from "./Rating";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["place"],
    queryFn: () => getPlace(id),
  });

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} queryKey="place" />
      ) : (
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p>{data.description}</p>

          <Features arr={data.amenities} />

          <Rating point={data.rating} />
        </div>
      )}
    </Container>
  );
};

export default Detail;
