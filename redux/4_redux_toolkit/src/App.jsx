import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Crud from './pages/Crud';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
