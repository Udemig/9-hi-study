import { useEffect, useState } from 'react';
import Model from '../models/UserListModel';
import UserListView from '../views/UserListView';

const UserListController = () => {
  const [users, setUsers] = useState([]);

  // class'ın bir örneğini oluşturduk
  // const model = new Model();

  // kullanıcı etikleşiminde (sayfaya girmesi) çalışıcak fonk:
  useEffect(() => {
    Model.getUsers().then((data) => setUsers(data));
  }, []);

  return <UserListView users={users} />;
};

export default UserListController;
