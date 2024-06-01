/*
 * Object Type:
 * Normal şartlarda ts'de bir object type mevcuttur. Object type'ı ucu çok açık bir tip olduğu için kullanılması tercih edilmez.
  
 * JS, nesne tabanlı bir programlama dili olduğu için bir çok yapı nesnelerden meydana gelir (diziler, fonksiyonlar, tarih, date,math). Object type'ı kullanarak net bir şekilde nesnenein tipini tanımlayamıyoruz.

 * Biz genelde daha spesifik şekilde özellikleri tanımlanmış olan nesneler ile çalışırız. Bu noktda nesnenin özelliklerininde tipini tanımlamalıyız. Bu sayeede ts hem hatları izler hem oto tamamlamayı devreye sokar.

*/

let data: object;

data = {};
data = [];
data = new Date();
data = function () {};

// Bir nesnenin doğru şekilde tipini tanımlama

// 1- tip tanımı
let student: {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
};

// 2- değer ataması
student = {
  id: 99,
  firstname: "ahmet",
  lastname: "tuna",
  age: 50,
};

// örn - api den gelen verinin tipini tanımla
let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string | number;
    suite?: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone?: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// değer ataması
user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
