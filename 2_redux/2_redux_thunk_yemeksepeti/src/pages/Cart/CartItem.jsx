import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { BsTrash3 } from 'react-icons/bs';
import { deleteItem, updateItem } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // miktar 1 arttır
  const increase = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  // miktarı azalt
  const decrease = () => {
    if (item.amount > 1) {
      // eğer miktar 1 den fazlaysa miktarını 1 azalt
      dispatch(updateItem(item.id, item.amount - 1));
    } else {
      // değilse elemanı kaldır
      dispatch(deleteItem(item.id));
    }
  };

  return (
    <div className="flex gap-4 border mb-10 rounded-lg p-4 hover:shadow">
      <img className="w-[115px] rounded-lg" src={item.photo} />

      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
        <p className="text-gray-500">{item.restaurantName}</p>

        <div className="flex justify-between items-end">
          <p className="font-semibold">{item.price} ₺</p>

          <div className="border rounded-xl text-lg">
            <button
              onClick={decrease}
              className="p-3 rounded-xl text-red-500 transition hover:bg-red-100"
            >
              {item.amount > 1 ? <FaMinus /> : <BsTrash3 />}
            </button>
            <span className="p-3">{item.amount}</span>
            <button
              onClick={increase}
              className="p-3 rounded-xl text-red-500 transition hover:bg-red-100"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
