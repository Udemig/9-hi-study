/*
 * Tür Dönüşümü
 
 * Örn kullanıcın sepetindeki ürünleri api'dan alıyoruz ancak bu ürünlerin fiyat api'dan bazen string bazen numver şeklinde gleiyor. Eğerki uygulamada fonksiyon içerisinde fiyatları number olarak görmek istiyorsak tür dönüşümü yapabiliriz
*/

// Örnek
let product1 = {
  name: "Laptop",
  price: 560000,
};

let product2 = {
  name: "Phone",
  price: "15000",
};

let newPrice1 = product1.price - 200;

let newPrice2 = (Number(product2.price) as number) - 200;

// örnek 2

// bir kişi nesnenesi oluşturlaım
let kisi: unknown = {
  name: "John",
  age: 55,
  adress: "123 main st.",
};

// kisi nesneninin iterface ile tipini tanımlayalım
interface IPerson {
  name: string;
  age: number;
  adress: string;
}

// tür dönüşümü uygula
const typedPerson = kisi as IPerson;

console.log(typedPerson.name);
