/*
 * Intersection Types - Kesişim Türler
 * TS'de Kesişim türler iki veya daha fazla türü birleştirmek için kullanılır.
 */

type typeA = { key1: string };
type typeB = { key2: number };

/*
 * 1) Intersection
 * Kesişim türlerde her iki tipinde bütün özelliklerini miras alırız
 */

// yukarıdaki tanımlanan iki tipi birleştirdik
type typeAB = typeA & typeB;

// değişken tanımlandğında her iki tipinde bütün değerleri
let foo: typeAB = {
  key1: "selam",
  key2: 45,
};

/*
 * 2) Union Types
 * Birleşmiş türlerde belirlenen türlerde en az birinin bütün özelliiklerini tanımlamalıyız
 * Ayrıca her iki türdeki bütün özelliklerde tanımlanabilir.
 */

type typeAorB = typeA | typeB;

let bar: typeAorB = { key1: "asdasd" };
let baz: typeAorB = { key2: 345 };
let bay: typeAorB = { key1: "sdaf", key2: 345 };

// ÖRNEK 1
type BusinessPartner = {
  name: string;
  credit: number;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;

type Customer = Identity & BusinessPartner;

let e1: Employee = {
  id: 12312,
  name: "John",
  email: "hohn@gmail.com",
  phone: "+90555667788",
};

let e2: Customer = {
  id: 454,
  name: "Foo",
  credit: 100999,
};

// istersek 2 den fazla tipi kesişim yapabiliriz
type NewEmployee = Identity & BusinessPartner & Contact;

let e3: NewEmployee = {
  id: 4534,
  name: "Baz",
  credit: 546456,
  email: "baz@gmal.öcom",
  phone: "+9023534345",
};
