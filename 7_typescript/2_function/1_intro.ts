/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve retrun ettiği değerin tipini tanımlamaktan ibarettir
 */

function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu " + (a + b);
}

// returb edilen değerin tipi tanımlanırken string dediğimiz için sonuç değişkenini tipide stringidi
const sonuc = hesaplama(45, 56);

let x = 50;

console.log(typeof x); // number

/*
 * Javascript Fonksiyon Türleri
 * 1- İsimli Fonksiyon
 * 2- İsimsiz Fonksiyon
 * 3- Ok Fonksiyon
 * 4- Tek Satır Fonksiyon
 * 5- Immadiate Call (Acil Çağrılan) Fonksiyon
 */

// 1) İsimli Fonksiyon
function hesapla(a: number): string {
  return "Sonuç " + a * 2;
}

hesapla(10);

// 2) İsimsiz Fonksiyon
const noNameFunc = function (a: number): string {
  return "Sonuç " + a * 2;
};

noNameFunc(20);

// 3) Ok Fonksiyon
const arrowFunc = (a: number): string => {
  return "Sonuç " + a * 2;
};

arrowFunc(55);

// 4) Tek Satır Fonksiyon
const singleLine = (a: number): string => "Sonuç " + a * 2;

// 5) Immediate Call (Hemen Çağrılan) Fonksiyon
// Tanımladnığı gibi çağrılan fonksiyona veirlen isim
// Eğerki dosya içerisnde bir  daha kullanmaycaksak tercih ederiz

// a) normal fonksiyon
const exaFunc = (par: number) => {
  console.log(par + " normal fonksiyon çağrıldı");
};
exaFunc(99);

// b) immediate call
(function (par: number) {
  console.log(par + " immediate call func çağrıldı");
})(99);

// SORU: Fonksiyonun tipini tanımlarken kendi oluşturduğumuz tipleri de kullanabiklir miyiz?

// CEVAP: Evet, fonksiyon paramtre ve reeturn tipi tanımlarken kendi oluşturdığımuz tipleri kullanabiliriz.

// ÖRNEK:

type UserType = {
  name: string;
  surname: string;
  age?: number;
};

let createUsers = (user: UserType): UserType[] => {
  return [user, user, user, user];
};

createUsers({
  name: "Fuat",
  surname: "Sarı",
});
