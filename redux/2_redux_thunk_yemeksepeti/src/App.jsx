import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from './redux/actions/cartActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
