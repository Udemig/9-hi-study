/*
 * Typescriptde bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken parametrelerinin sağına tiplerini girerek tannımlayabiliriz ama bazı durumlarda fonksiyonlardan bağımsız bir şekilde farklı dosylarada fonksiyonun tipini tanımlamaız gerekebiliyor..

 * Örn: React'da pro olarak göndeirlen fonksiyonun tipinin propu alan bileşenin içerisndede fonksiyondan bağımsız bir şekilde tanımlanmaası gerekir.

 * Bundan kaynaklı ts'de fonksiyon tipi tanımlanmanın iki yolu vardır
*/

// 1.YOL: Fonksiyonu Tanımlarken Tip Tanımı
const func1 = (par1: boolean, par2: object): string => {
  return "Fonksiyon Çalıştı";
};

// 2.YOL: Fonksiyondan Bağımsız Tip Tanımı

// fonksiyonun tipini custom type ile tanımlıyoruz
type FuncType = (par1: boolean, par2: object) => string;

// parametrelerin ve return satrının tipini ekstra olarak yazmaya gereke kalmaz
const func2: FuncType = (par1, par2) => {
  return "Fonksiyon Çalıştı";
};

// SORU: 2 farklı sayı alıp çarpımlaırnı return eden bir fonksiyon yazınız.
// Fonksiyonun tipini fonksiyon tanımınından bağımsız olarak 2.yöntem oluşturun.

// 1) type tanımı
type MathFunc = (sayi1: number, sayi2: number) => number;

// 2) fonksiyonu tanımla
const calc: MathFunc = (a, b) => a * b;

// 3) fonksiyonu çapır
const total = calc(67, 2);

console.log(total); // 134

// SORU: Kişinin bulundupu konumu ve oranın have derecesini parametre olarak alıp geriye "Merhaba x konumundaki hava sıcaklığı y derece." şeklinde bir metin return eden fonksiyon yazınız ve itpini 2. yöntem ile yani fonksiyon tanımından bağımsız bir şekilde oluşturun

// CEVAP:
type Konum = {
  sehir: string;
  ulke: string;
};

type HavaDurumu = {
  derece: number;
};

function havaDurumuMesaji(konum: Konum, hava: HavaDurumu): string {
  return `Merhaba, ${konum.sehir}, ${konum.ulke} konumundaki hava sıcaklığı ${hava.derece} derece.`;
}

const konum: Konum = { sehir: "İstanbul", ulke: "Türkiye" };
const hava: HavaDurumu = { derece: 25 };

console.log(havaDurumuMesaji(konum, hava));

// CAVAP:
type Weather = (string, number) => string;

const statues: Weather = (location, degree) =>
  `temperature is ${degree} at ${location}`;
const sum = statues("Istanbul", 34);

// CEVAP
function localAndWeather(loc: string, temperature: number): string {
  return `${loc} Konumunuzdaki hava sıcaklığı: ${temperature}°C`;
}

// Örnek kullanım
const loc = "Hayrabolu";
const temperature = 25;
console.log(localAndWeather(loc, temperature));
