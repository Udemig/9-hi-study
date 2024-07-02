import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="container mx-auto py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5">
      <h1 className="text-warning">404</h1>

      <p>Üzgünüz aradığınız sayfa bulunamadı</p>

      <p>
        Burada devam edebilirisniz: <Link to="/">Anasayfa</Link>
      </p>
      <p>
        Not oluşturmak İsterseniz: <Link to="/new">Oluştur</Link>
      </p>
    </div>
  );
};

export default Undefined;
