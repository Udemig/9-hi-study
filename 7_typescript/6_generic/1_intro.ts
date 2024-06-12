/*
 ! Generic:
 * Bir fonksiyonun, type'ın, class'ın veya interface'ın içerisindeki bazı türlerin dinamik oalrak değişebilmesini sağlayan yapıdır.

 * Bir fonksiyon içerisinde generic nasıl tanımlanır?
 
 - Bir generic her türde değer alabilir.
 - Generic type'lar fonksiyonun içerisnde heryerde kullanıalbilir.
 - Generic tipi fonksiyonlarda fonksiyonun isminin bitişine ve parametre kısmının başlangıcı arasına "<>" ile tanımlarız
 - Bir fonksiyonda istediğimiz kadar generic tip tanımlayabiliriz
*/

const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomNumber([1, 2, 5, 8, 9, 4, 5, 7, 9]));

const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomString(["selam", "naber", "nasılsın"]));

// Generic Tip kullanımı ile bu sorunu çözelim
const getRandomEle = <TYPE_PARAM>(array: TYPE_PARAM[]): TYPE_PARAM => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandomEle<string>(["selam", "naber", "nasılsın"]);

getRandomEle<number>([1, 345, 7, 9, 5, 3]);

getRandomEle<boolean>([true, false, false, true, false]);

/*
 * normalde generic tip alan fonksiyona parametre gönderdiğimiz anda o parametrenin tipini generic olarak gönderir ve bizim generic tipi göndermemeiz gerek kalma yinde beklenmedik durumlar oluşabiliceğinden biz her zman kendimiz göndericez
 */

getRandomEle([123, 123, 123, 123, 1, 23]);
