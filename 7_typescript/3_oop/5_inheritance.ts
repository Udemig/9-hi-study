/*
 * Inheritance (Kalıtım - Miras)

 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özellikllerini ve  methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod orginazsyonunuu geliştirir.
 Miras genellijke "ana sınıf" | "üst sınıf" tan üretilmiş olan alt sınıflar arasında geçekleşir

 * Alt Sınıf (Derived Class | Child Class), bir Üst Sınıftan (Parent Class) niras alarak çzelliklerini ve davranışlarını genişletebilir.
 */

// Parent Class
class GeometrikSekil {
  public ad: string;

  constructor(yeni_ad: string) {
    this.ad = yeni_ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir`);
  }
}

// Constructor'ı olmayan Derived - Child Class
class Dikdortgen extends GeometrikSekil {
  private uzunluk: number = 40;
  private genislik: number = 80;
}

const sekil1 = new Dikdortgen("Dikdörtgen");

// Constructor'ı olan Derived - Child Class
class Daire extends GeometrikSekil {
  private yariCap: number = 4;

  constructor() {
    super("Daire");
  }
}

const sekil2 = new Daire();

/*
 * Child class'ta constructor tanımlanmadı ise new ile örnek oluştuurken Parent class'ın construtor'ına değer göndeririz.

 * Eğer child class'a da constructor eklersek mutlaka super methodu kullanıp parent'ın construtor'ında istenilen değerler gönderilmeli
*/

// Parent
class Arac {
  public marka: string;
  public model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılır...");
  }
}

// Child

type Fuel = "benzin" | "dizel" | "elektrik";

class Araba extends Arac {
  // miras alınan class'a yeni değişkenler >
  private yakit: Fuel;

  constructor(yeni_marka: string, yeni_model: string, yeni_yakit: Fuel) {
    super(yeni_marka, yeni_model);

    this.yakit = yeni_yakit;
  }

  // > ve yeni methodlar eklenebilir
  vitesDegis(articakMi: boolean) {
    console.log(articakMi ? "Vitest arttırılıyor.." : "Vites düşülüyor...");
  }

  // miras ile alınan methodu değiştirme > method overriding
  calistir(): void {
    super.calistir(); // parent class'ın methodunu çağırdık
    console.log("Kontak Çevriliyor");
    console.log("Gaz veriliyor");
  }
}

const araba2 = new Araba("Mercedes", "AMG GT", "benzin");
const araba3 = new Araba("BMW", "M5", "benzin");

console.log(araba2);
console.log(araba3);

araba3.calistir();
araba3.vitesDegis(true);

// Bİr class aynı anda iki farklı class'ı miras alamaz ama miras alma olayı birden fazla kez geçekleşebilir.

class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color: string = "Kahverengi";
}

class Mother extends Human {
  eye_color: string = "Mavi";
}

class Son extends Father {}

const son = new Son();

console.log(son.eye_color);
