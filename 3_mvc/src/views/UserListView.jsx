const UserListView = ({ users }) => {
  return (
    <div>
      <h1>Kullanıcılar</h1>
      <hr />
      {users.map((user) => (
        <>
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default UserListView;
