import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';
import Crud from './pages/Crud';
import Header from './components/Header';
import { useSelector } from 'react-redux';

const App = () => {
  const { isDarkTheme } = useSelector((store) => store.counterReducer);

  return (
    <BrowserRouter>
      <div
        style={{ minHeight: '100vh' }}
        className={isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
