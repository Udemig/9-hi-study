import { useQuery } from "@tanstack/react-query";
import { getPlace } from "../../api";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Features from "./Features";
import Rating from "./Rating";
import Availability from "../../components/Availability";
import Price from "./Price";
import Buttons from "./Buttons";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["place"],
    queryFn: () => getPlace(id),
  });

  return (
    <Container designs={"max-w-[700px]"}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} queryKey="place" />
      ) : (
        <div className="flex flex-col gap-3">
          <Buttons id={data.id} />

          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <Rating point={data.rating} />
          </div>
          <p>{data.description}</p>
          <img src={data.image_url} className="rounded-lg" />

          <Features arr={data.amenities} />

          <div className="flex justify-between gap-2 items-center mt-5">
            <Price data={data.price_per_night} />
            <Availability status={data.availability} expand={true} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Detail;
