import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setCount } from '../redux/slices/counterSlice';

const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="vh-100 w-full d-flex justify-content-center align-items-center">
      <div className="d-flex gap-4 align-items-center">
        <button onClick={() => dispatch(decrease())}>Azalt</button>

        <span className="fs-1">{count}</span>

        <button onClick={() => dispatch(increase())}>Arttır</button>

        <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Counter;
