import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import RestCard from './../components/RestCard';
import { getRestaurants } from '../redux/actions/restaurantActions';
import Container from '../components/Container';

const Main = () => {
  // store'daki restaurant reducer'ına abone oldma
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );

  // dispatch kurlumu
  const dispatch = useDispatch();

  // bileşen ekrana basıldığında api'isteği at ve reducer'ı güncelle
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">Tüm Restoranlar</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={() => dispatch(getRestaurants())} />
      ) : (
        <div className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {restaurants.map((rest) => (
            <RestCard key={rest.id} data={rest} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Main;
