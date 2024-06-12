/*
 * Constructor - inşa Etme mehodu

 * Bir sınıfın constructor'ı o sınıftan birnesne oluşturduğumuzda ilk çağrılan methoddur

 * Constructor methodu oluşturulan nesnenein özelliklerinin başlangıç değerlerini belirler.

 * Constructor sayesinde bir class'tan oluşturulan bütün nesnelerin biribirin kopyası olmaz

 * Constructor new anahtar kelimesi ile class çağrıldığında ilk çalışan methoddur
*/

class Person {
  //1) Sınıfın özelliklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  //2) Constructor yapısı ile dışarıdan değer alma
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }

  kendiniTanit() {
    console.log(`Merhaba benim adım ${this.ad} ${this.soyad}.`);
  }
}

// sınftan bir örnek oluştutuken constructor kod bloğunda tanımlana parametreleri gödnermek zorundayız
const kisi1 = new Person("Burak", "Çimen", 24);
const kisi2 = new Person("Kadir", "Sarı", 27);

console.log(kisi1);
kisi1.kendiniTanit();
console.log(kisi2);

// SORU: Bir Teknolojik alet için class yapısı oluşturunuz. Bu class'tan oluşturulucak nesnelerin değerlerini constructor yapısı ile dışarıdan alınsın. Class en az 4 özellik ve 1 methoda sahip olsun
// Class'tan en az bir örnek oluşturun

// CEVAP:

class Iphone {
  model: string | number;
  gb: string | number;

  constructor(model: string | number, gb: string | number) {
    this.model = model;
    this.gb = gb;

    this.myPhone();
  }

  myPhone() {
    console.log(`Telefonum ${this.model} ${this.gb}`);
  }
}

const tel1 = new Iphone("4s", "128gb");
const tel2 = new Iphone("15 pros", "256gb");

// cevap
class telefon {
  model: string | number;
  yıl: number;
  fiyat: number;

  constructor(model: string | number, yıl: number, fiyat: number) {
    this.model = model;
    this.yıl = yıl;
    this.fiyat = fiyat;
  }

  telefonum() {
    console.log(`telefonumun modeli ${this.model}, ${this.yıl}, ${this.fiyat}`);
  }
}

const benimtel = new telefon("13pro", 2022, 30000);
benimtel.telefonum();
console.log(benimtel);
