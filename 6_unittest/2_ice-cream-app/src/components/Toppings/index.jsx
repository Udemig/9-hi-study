import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4040/toppings")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // checbox tiklendiyse ürünü sepete ekle tik kaldırıldıysa sepetten çıkar
  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };

  return (
    <div>
      <h1>SOS Çeşitleri</h1>

      <p>
        Tanesi <span className="text-success">3</span>₺
      </p>
      <h3>
        Soslar Ücreti{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>
        ₺
      </h3>

      <div className="row gap-3 mt-4">
        {data.map((item) => (
          <div className="top-card col">
            <label htmlFor={item.name}>
              <img src={item.imagePath} height={100} />
              <p className="text-nowrap text-center">{item.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e.target.checked, item)}
              className="d-none"
              id={item.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
