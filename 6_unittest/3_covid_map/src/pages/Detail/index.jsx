import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import getData from "../../redux/actions";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import InfoCard from "./InfoCard";

const Detail = () => {
  const { data, error, isLoading } = useSelector((store) => store);

  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const code = params.get("code");
  const query = params.get("q");

  useEffect(() => {
    dispatch(getData({ code, query }));
  }, [code, query]);

  // covid nesnenesini diziye çevirelim
  const covidArr = Object.entries(data?.covid || {});

  return (
    <div className="min-h-[calc(100vh-74px)] bg-zinc-800 text-white grid place-items-center p-6">
      <div className="min-h-[80vh] bg-white p-8 rounded-lg shadow-lg max-w-3xl max-md:w-full">
        {/* üst içerik */}
        <div className="flex  gap-5 lg:gap-20 justify-between items-center mb-6">
          <Link
            className="bg-gray-700 py-2 px-3 rounded-md hover:bg-gray-800"
            to="/"
          >
            Geri
          </Link>

          <div className="flex items-center space-x-2">
            {isLoading ? (
              <Loader type="header" />
            ) : (
              !error && (
                <>
                  <img
                    className="w-16 lg:w-24 rounded-md"
                    src={data.country.flags.png}
                    alt={data.country.flags.alt}
                  />
                  <h1 className="text-gray-900 text-lg lg:text-2xl font-bold">
                    {data.country.altSpellings[1]}
                  </h1>
                </>
              )
            )}
          </div>
        </div>

        {/* alt içerik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error
              message={error}
              retry={() => {
                dispatch(getData({ code }));
              }}
            />
          ) : (
            <>
              {covidArr.map((i, key) => (
                <InfoCard item={i} key={key} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
