import axios from 'axios';
import { useEffect } from 'react';
import { setError, setUsers, setLoading } from '../app/slices/classicSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserListClassic = () => {
  const { isLoading, isError, users } = useSelector((store) => store.classic);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => dispatch(setError(console.log(err))));
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Yükleniyor</h1>
      ) : isError ? (
        <h1>Bir sorun Oluştu</h1>
      ) : (
        users.map((user) => <h1>{user.name}</h1>)
      )}
    </div>
  );
};

export default UserListClassic;
