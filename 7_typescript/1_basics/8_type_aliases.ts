/*
 * Type Aliases | Custom Type
 * Şu ana kadar tip ataması yaparken js'de var olan temel tiplere ekstra olarak bir iki tane tip kullandık. Gerçek proejerlde o anki yaptığımız işe özel spesifik veri tiplerine ihityaç duyabiliyoeuz.
  
 * Bunları tanımlamak için "type" anahtar kelimesi ile kendi özel tiplerimizi oluşturaibliyoruz.

 * Neden İhtiyacımız Var?
 * Çünkü belirlediğimiz type projenin bir çok alanında sayfasıında kullanılması gerekebilir. Bu noktada custom type kullanrak kopyala yapıştır ve kod tekrarının önüne geçeriz.

*/

type zeki = string;

let isim: zeki = "selam";

// örnek: aynı union type'ın projede defalarca kullanılması gerektiğinde kod tekrarı olur
let foo: string | number | boolean = "merhaba";
let bar: string | number | boolean = 35;
let baz: string | number | boolean = true;

// çözüm: sıklıkla kullanılan bu tip tanımı için custom type oluşturmak
export type snbType = string | number | boolean;

let foo1: snbType = "merhaba";
let bar1: snbType = true;
let baz1: snbType = 45;

// SORUN: aynı tipin kullanıclar için birden fazla kez ihtiyaç duyulması
let user1: { name: string; age: number } = { name: "Ali", age: 45 };

let user2: { name: string; age: number } = { name: "Mustafa", age: 23 };

let explain = (user: { name: string; age: number }) => {
  console.log(`Merhaba benim adım ${user.name} ve ${user.age} yaşındayım`);
};

// ÇÖZÜM:
type User = { name: string; age: number };

let user3: User = { name: "Ali", age: 45 };

let user4: User = { name: "Mustafa", age: 23 };

let explainn = (user: User) => {
  console.log(`Merhaba benim adım ${user.name} ve ${user.age} yaşındayım`);
};

// HTMLFormElement
// HTMLButtonElement
// HTMLDivElement

// Örneğin tuple tipinin custom type yapalım
type Geo = [number, number];

let xCords: Geo = [123, 456];
let yCords: Geo = [123, 456];

// oluşturudupumuz custom type'ları sadece değişken taınmlarken değil dizi tiplerinde fonksşyon tiplarinde ve tiplerin kullanılabileceği diğer her eyrde kullanabiliriz.

const flightRoute: Geo[] = [
  [12, 12],
  [56, 56],
  [12, 34],
  [76, 23],
];
