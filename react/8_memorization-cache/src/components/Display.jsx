import React from 'react';

/*
 * Sorun:

 * Şuan display bileşeni kapsayıcı bileşendeki (newExa) her state değiştiğinde tekrar render oluyor. Arayüzün güncel kalması için sadece count değeri değiştiğinde bu bileşen tekrar render edilmeli ama display bileşenin herhangi bir şekilde name değeri ile alkası olmadığından name değiştiğinde display bilşeni tekrardan render edilmemeli render edilmesi performans kaybına yol açar.

 * Çözüm

 * React.memo(), react uygulamlarında performans optimizasyonu için kullanılır. Bu fonksiyon bileşeni memorize etmek için kullanılır. Sonuç olarak bileşen gönderilen proplar değişmediği sürece bileşenin tekraradan render edilmesini önüne geçer
*/

const Display = ({ count, updateCount }) => {
  console.log('Display bileşeni render edildi');

  return (
    <>
      <div
        style={{
          background: 'crimson',
          padding: '5px 20px',
          margin: '15px',
          borderRadius: '10px',
        }}
      >
        <h3>Sayacın Değeri: {count}</h3>
      </div>

      <button onClick={updateCount}>Sayacı Arttır</button>
    </>
  );
};

export default React.memo(Display);

/*
 * React memonun çalışma aşamasındaki sorunu.
 * primitive değerleri prop olarak aldığı zaman sorun yaşamdan görevini yapıyor.
 * ama bir fonksiyonu prop olarak gönderdiğimiz anda görevini yapamıyor
 */
