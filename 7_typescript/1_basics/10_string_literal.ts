/*
 * String Literal
 * Bir metnin tipini string olarak tanımlamak yerine alabileceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip kısıtlaması yapabiliyoruz
 */

// Örn: Bir spotify benzeri projede kullanıcı tipini oluşturmak istiyoruz idleri sayı isimleri string olarak ifade edilir. kullanıcı hesabının tipini ifade ederken string demek yerine zatena alabileceği 2 - 3 farklı deper olduğundan string literal ve union types konusu ile değerl kısıtlaması yapmak daha doğru olur

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium"; // string literal
};

const newUser: User = {
  id: 1243134,
  name: "Fadime",
  account_type: "premium",
};

// Örnek: Bir araba kiralama sitesi için api'dan gelen araba verisilerinin tipini tanımla. sahip versinin nasıl gelşdiğini bilemiyoruz

type Car = {
  make: string;
  model: string | number;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik" | "hybrid";
  year: number;
  owner: any;
};

const newCar: Car = {
  make: "Hyundai",
  model: "i20N",
  gearbox: "manuel",
  fuel: "benzin",
  year: 2023,
  owner: null,
};
