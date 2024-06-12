/*
 * ReadOnly - Salt Okunur

 * Typescript'de bir sınıfın veya nesnenin içerisndeki bir özelliği  sadece okunabilir yapmaya yarar

 * Readonly ile tanımladığımız bir özelliğer değer ataması:

 * sınıflarda sadece  constructor içerisnde yapılabilir

 * nesnelerde ise sadece özelliği tanımlarken yapılır

*/

// Nesnelerde readonly kullanımı
type Person = {
  name: string;
  surname: string;
  readonly TCno: number;
};

const kisi: Person = {
  name: "Mahmut",
  surname: "Yanık",
  TCno: 12345678901,
};

console.log(kisi);

kisi.name = "Fırat";
kisi.surname = "Yıldız";
// kisi.TCno = 99999999999; bu derğer değiştirlemez

console.log(kisi.TCno);

// Sınıflar readonly kullanımı
class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string;

  constructor(yeni_isim: string, yeni_sayfa: number, yeni_yazar: string) {
    this.isim = yeni_isim;
    this.sayfa = yeni_sayfa;
    this.yazar = yeni_yazar; // constructor bloğunda readonly değerlere değer atamasıyapılabilir
  }

  yeniYazaryarla(yeni_yazar: number) {
    // this.yazar = yeni_yazar;
  }
}

const kitap = new Kitap("Hobbit", 500, "Tolkien");

kitap.isim = "Hobbit 3";
// kitap.yazar = "ads";

// SORU:
// Readonly bir değer sahip ve değişkenleri tanımlarken erişim belirteçleri kullandıpınız en az 4 özelliğe sahip bir class yazınız ve class'tan örnek oluşturunuz

// CEVAP

class Magaza {
  public bay: string;
  public bayan: string;
  public cocuk: string;
  readonly beden: string;

  constructor(bay: string, bayan: string, cocuk: string, beden: string) {
    this.bay = bay;
    this.bayan = bayan;
    this.cocuk = cocuk;
    this.beden = beden;
  }

  bedenSec(beden: number) {}
}

// cevap
class İnsan {
  private isim: string;
  private kg: number;
  private boy: number;
  private readonly cinsiyet: string;

  constructor(
    yeni_isim: string,
    yeni_kg: number,
    yeni_boy: number,
    yeni_cinsiyet: string
  ) {
    this.isim = yeni_isim;
    this.kg = yeni_kg;
    this.boy = yeni_boy;
    this.cinsiyet = yeni_cinsiyet;
  }
  bebek(cinsiyet: string) {
    console.log(cinsiyet);
  }
}

// cevap
class Car {
  marka: string;
  protected model: number;
  readonly isSold: true;
  fuelType: string;

  constructor(marka: string, model: number, isSold: true, fuelType: string) {
    this.marka = marka;
    this.model = model;
    this.isSold = isSold;
    this.fuelType = fuelType;
  }

  tanit() {
    console.log(
      `araç bilgileri: ${this.marka},${this.model},${this.isSold},${this.fuelType}`
    );
  }
}

const araba = new Car("bmw", 320, true, "benzin");
araba.tanit();
