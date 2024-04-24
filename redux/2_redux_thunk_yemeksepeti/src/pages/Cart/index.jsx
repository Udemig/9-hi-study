import { useSelector } from 'react-redux';
import Container from './../../components/Container';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Loader from './../../components/Loader';
import Error from './../../components/Error';

const Cart = () => {
  const { isLoading, error, cart } = useSelector((store) => store.cart);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : cart.length === 0 ? (
        <p className="flex flex-col items-center gap-3">
          Sepette herhangi bir ürün yok
          <Link
            className="border p-2 shadow rounded hover:bg-gray-100"
            to={'/'}
          >
            Ürün Ekle
          </Link>
        </p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </Container>
  );
};

export default Cart;
