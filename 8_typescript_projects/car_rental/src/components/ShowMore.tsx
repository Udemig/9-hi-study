import { useSearchParams } from "react-router-dom";
import Button from "./Button";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();
  /*
    * 1) URL'de limit parametresi yoksa:
    * Kullanıcı projeye yeni girmiştir ve varsayılan olarak ekranda 5 araç vardır.
    * Butona tıklanınca url param eklenmeli ve değeri 10 olmalı

    * 2) URL'de limit parametresi varsa:
    * Kullanıcı en az 1 kere butona basmıştır
    * Mevcut limitin üzerine 5 ekle
    */

  // urldeki limit parametresini al (param. yoksa 5)
  const limit = Number(params.get("limit")) || 5;

  const increaseLimit = () => {
    // yeni limiti belirle
    const newLimit = limit + 5;

    // parametreleri güncelle
    params.set("limit", String(newLimit));

    // url'i güncelle
    setParams(params);
  };

  return (
    <div className="w-2full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
