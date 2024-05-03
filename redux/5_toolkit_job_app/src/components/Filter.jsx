import React, { useEffect, useRef, useState } from 'react';
import Select from './Select';
import { sortOpt, statusOpt, typeOpt } from './../utils/constants';
import Button from './Button';

const Filter = () => {
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState();
  const [sort, setSort] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();

  //*  DEBOUNCE
  // Her tuş vuruşunda filtreleme yapmak hem client'ın cihazını hemde sunucuyu gereksiz yorar. Bu yüzden kullanıcın bir vutona basmasını gerektirmeyen inputlarda debounce yöntemi kullanılarak her tur vuruşunda ddeğiş kullanıcı yazma işlemeni sonlandırınca ilgili fonksiyonu çağırırız. Ardışık olarak gerçekleşen fonksiyon çağırma işlemlerinde fonksiyonun çağrıldığı görmezden gelir ancak belirli zaman aşımı olduğunda fonksiyonu çalıştırır
  useEffect(() => {
    if (text === undefined) return;

    // bir sayaç başlat ve sayaç durunca işlem yap
    const timer = setTimeout(() => setDebouncedText(text), 500);

    // eğerki süre bitmeden tekrar useEffext çalışırsa (yeni sayaç başlaması) önceki sayacı iptal et
    return () => clearTimeout(timer);
  }, [text]);

  console.log(debouncedText);

  // filtreleme veya sıralama için bi state değiştiğinde api'dan güncel verileri al

  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>

      <form>
        <div>
          <label>Ara</label>
          <input onChange={(e) => setText(e.target.value)} type="text" />
        </div>

        <Select
          label="Durum"
          options={statusOpt}
          fn={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Tür"
          options={typeOpt}
          fn={(e) => setType(e.target.value)}
        />
        <Select
          label="Sırala"
          options={sortOpt}
          fn={(e) => setSort(e.target.value)}
        />

        <Button text="Filtreleri Sıfırla" />
      </form>
    </div>
  );
};

export default Filter;
