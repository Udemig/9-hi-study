import React, { useState, useCallback } from 'react';
import Display from './Display';

const NewExa = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  /* 
   * SORUN
   * Bu bielşen her render edilidğinde bu fonksiyonu tekrardan oluşturur ve bellekte bir konumda tutar

   * Biz bu her render sırasında tekrardan oluşturlan fonksiyonu display bileşnine prop olarak gönderdiğimiz zaman gönderdiğimiz fonkiyon değişmemiş olsa bile react memo fonksiyonları karşılaştırken bellekteki referansına göre karşılaştıracağı için bunları her seferinde farklı bir fonksiyon gibi algılar sonuç oalrak react.memo görevini yapamaz propların değiştiğini zanneder ve display bileşneini gereksiz yere tekrar render eder

   * ÇÖZÜM
   * Bileşen her render edildiğinde fonksiyonu yeniden oluşturmak yerine ilk render sırasında oluşturlan versiyonunu bellekte tutuyotruz ve her render sırsında fonksiyonu ihtiyacımız olduğunda fonksiyonu yendien oluşturmak yer,ne bellekte ttutğumuz ilk versiyonuun alıyoruz. sonuç olarak display bileşnine farklı referansa sahip fonksiyonu prop olarak göndermiyeceğiz ve react.memo görevini yapabilecek.
   */

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="wrapper">
      <h2>Sayaç Ugulaması</h2>

      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="kullanıcı ismi"
        type="text"
      />
      <p>İsminiz: {name}</p>

      <br />

      <Display updateCount={updateCount} count={count} />
    </div>
  );
};

export default NewExa;
