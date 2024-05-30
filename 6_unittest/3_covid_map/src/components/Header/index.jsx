import { FaVirusCovid } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki veriyi al
    const text = e.target[0].value;

    //kullanıcyı detay sayfasına yönlendir
    navigate(`detail?q=${text}`);
  };

  return (
    <header className="flex bg-zinc-900 text-white p-5 md:px-20 justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <FaVirusCovid className="text-green-500 text-xl" />
        <h1>COVID Takip</h1>
      </Link>

      <Form handleSubmit={handleSubmit} />

      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Bugün Aşı Olanlar</span>
          <span className="text-gray-400">(47,803)</span>
        </p>

        <TbVaccine className="text-xl text-green-500" />
      </div>
    </header>
  );
};

export default Header;
