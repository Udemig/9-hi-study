import { NavLink } from 'react-router-dom';
import { toggleTheme } from '../redux/slices/counterSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between">
        <h2>TOOLKIT</h2>

        <nav className="d-flex  gap-3">
          <NavLink to="/">Sayaç</NavLink>
          <NavLink to="/crud">CRUD</NavLink>

          <button onClick={() => dispatch(toggleTheme())}>Tema Değiş</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
