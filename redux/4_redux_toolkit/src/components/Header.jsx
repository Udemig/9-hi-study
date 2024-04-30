import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between">
        <h2>TOOLKIT</h2>

        <nav className="d-flex  gap-3">
          <NavLink to="/">Sayaç</NavLink>
          <NavLink to="/crud">CRUD</NavLink>

          <button>Tema Değiş</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
