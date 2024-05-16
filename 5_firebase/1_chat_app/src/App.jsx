import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN'));
  const [room, setRoom] = useState(null);

  // kullanıcının yetkisi yoksa: login sayfası
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  // kullanıcın yetkisi varsa:
  return (
    <div className="container">
      {!room ? (
        // oda seçilmediyse: oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      ) : (
        // oda seçildiyse: sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
