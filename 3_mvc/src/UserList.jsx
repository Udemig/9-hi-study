import { useState } from 'react';
import { useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <h1>Kullanıcılar</h1>

      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
};

export default UserList;
