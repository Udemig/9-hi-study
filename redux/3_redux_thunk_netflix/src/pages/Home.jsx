import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGenres, getPopular } from '../redux/actions';
import Hero from '../components/Hero';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
