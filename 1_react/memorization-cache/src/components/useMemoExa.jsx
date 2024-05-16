import { useState, useMemo } from 'react';

const UseMemoExa = () => {
  const [count, setCount] = useState(0);

  /*
   * maliyetli bir işe yapana fonksiyonbu simüle ettik
   * React bilşendeki state'de bir güncelleme olduğunda güncellemenin ekrana yansıması için bileşeni tekrar render eder
   
   * Sorun: Aşağıdaki hesaplama bileşen her render olduğunda gereksiz yere en baştan hesaplanıyor
  
  * Çözüm: useMemo kullanığ yaptığımız hesaplamanın sonucunu cache'e atmak ve her render sırasında yeni sonuç üretmek yerine cache'deki veriye erişip kullanarak gereksiz hesaplamaların önüne geçiyoruz
  */
 
  const dizi = useMemo(() => {
    console.log('hsaplama yapıldı');

    //1) maaliyetl işlem > 1.000.000 elemanlı dizi oluştur
    const dizi = new Array(100).fill('Merhaba Dünya');

    //2) maaliyetli işlem > diziyi dön ve yeni dizi oluştur
    const yeniDizi = dizi.map((item) => item + '!');

    return yeniDizi;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Sayacı Arttır ({count})
      </button>

      <h2>{dizi.length} uzunluğunda dizi</h2>
    </div>
  );
};

export default UseMemoExa;
