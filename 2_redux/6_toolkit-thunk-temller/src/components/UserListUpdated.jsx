import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../app/actions/userActions';

const UserListUpdated = () => {
  const { isLoading, isError, users } = useSelector((store) => store.updated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Yükleniyor</h1>
      ) : isError ? (
        <h1>Üzgünüz bir hata oluştu</h1>
      ) : (
        users.map((user) => <h1>{user.name}</h1>)
      )}
    </div>
  );
};

export default UserListUpdated;
