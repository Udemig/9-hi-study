/*
 * Access Modifiers - Erişim Belirteçleri
 
 * Class elemanalrı ile hassas bilgileri tutucağımız  zazan bu bilgelerin class'ın dışarısından erişiliğp erişlimeyeceğini belirtmek isteyebiliriz.

 * Örneğin kredi kartı bilgilerini tutan bir class olsun bu class'ın tutucağı bilgeleri kod içerisinde her yerde kullanılması önlemek isteyebiliriz sebebi ise güvenlik zaafiyeti oluşturabilecğeinden.

 * 3 adet erişim belirteci vardır.

 * public: hem class dışarısından hemde class'ı miras alan diğer class'larda da erişilebilen değerler ifade etmek için kullanılır

 * protected: sadece class'ın kendisi ve onu exten eden (miras alan) diğer class'lardan erişilebilend değer ifade etmek için kullanılır

 * private: sadece tanımlandığı class içerisnde eirşlebilen değerler ifade etmek için kullanılır
*/

// Public
class Arac {
  public marka: string;

  constructor(yeni_marka: string) {
    this.marka = yeni_marka;
  }

  tanit() {
    console.log("Bu araba " + this.marka); // class içerisi
  }
}

class Motor extends Arac {
  calistir() {
    console.log(this.marka + " araba çalıştı...."); // miras alan class içerisi
  }
}

const honda = new Arac("Honda");

console.log(honda.marka); // class dışarısından

// Protected
class EvcilHayvan {
  protected ad: string;

  constructor(yeni_ad: string) {
    this.ad = yeni_ad; // tanımladnığı class
  }
}

class Kopek extends EvcilHayvan {
  havla() {
    console.log(this.ad + " havlıyor"); // miras alan class
  }
}

const kopek = new Kopek("Boncuk");

// kopek.ad; // dışarıdan erişişm olmuyor
kopek.havla();

// Private

class OzelPersonel {
  private isim: string;

  constructor(yeni_isim) {
    this.isim = yeni_isim; // tanımlandığı class'ta erişilir
  }
}

class GumrukPersoneli extends OzelPersonel {
  isminiYaz() {
    // this.isim; // miras alnın classta erişilemez
  }
}

const kisi = new OzelPersonel("Rıfat");

// kisi.isim; // dışarıdan erişelemez

/*
 * NOT: Erişim belirteçeleri aynı bütün ts'e özel olan kodlarda oldupu gibi kodu derlediğimizde ortadan kaybolur yani bus berliteçler sadece geliştirme ortamını daha güvenli hale getirmek için kullanılır

 ERIŞIM        DIŞARIDAN     MİRAS ALAN CLASS      TANIMLANDIĞI CLASS

 public          💥                  💥                         💥

 protected                           💥                         💥

 private                                                        💥

*/
