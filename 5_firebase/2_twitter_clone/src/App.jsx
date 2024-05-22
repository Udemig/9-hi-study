import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Protected from './pages/Protected';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Kullanıcın, erişmek için hesabına giriş yapması zorunlu olan route'ları bir kapsayıcı route içerisine aldık */}
        <Route element={<Protected />}>
          <Route path="/home" element={<Feed />} />
          <Route path="/profil" element={<h1>Profil</h1>} />
          <Route path="/ayar" element={<h1>Ayar</h1>} />
          <Route path="/mesaj" element={<h1>Mesajlar</h1>} />
          <Route path="/mail" element={<h1>Mail</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
