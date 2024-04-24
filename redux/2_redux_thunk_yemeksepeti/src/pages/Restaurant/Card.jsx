import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions/cartActions';

const Card = ({ product, restName }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToBasket(product, restName));
  };

  return (
    <div className="card border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-gray-500">{product.desc}</p>
        </div>

        <p className="text-lg font-semibold">{product.price} ₺</p>
      </div>

      <div className="w-[115px] h-[115px] relative">
        <img src={product.photo} className="w-full h-full rounded-md" />

        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 transition w-8 h-8 grid place-items-center"
        >
          <FaPlus className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Card;
