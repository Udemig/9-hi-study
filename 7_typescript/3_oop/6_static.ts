/*
 * static kelimesi bir sınıfın örneği olmadan doğrudan sınıfa ait olduğu anlamına gelir.
 * Direkt sınıf üzerinden erişilebilen özellike yada methodlar
 */

// Static Method

class Matematik {
  topla(x: number, y: number): number {
    return x + y;
  }

  static carp(a: number, b: number): number {
    return a * b;
  }
}

// static olamyan method ancak class'ın örnekleri aracılığı ile erişlebilir
const math = new Matematik();

math.topla(50, 70);

// static method örnek olmadan doğrudan class üzeirnden erişilebilir
Matematik.carp(67, 34);

// Static Değişken
class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(yeni_isim: string) {
    this.isim = yeni_isim;

    // constuctor her çalıştığında yani her yeni öprenci oluşturkudğunda static değişkeni 1 arttırs
    Ogrenci.ogrenciSayisi++;
  }
}

// static değişkenler class'tan oluşturulan nesnlere aktarılmaz
const o1 = new Ogrenci("ali");
new Ogrenci("ayşe");
new Ogrenci("fatma");
new Ogrenci("fatma");
new Ogrenci("fatma");
new Ogrenci("fatma");

console.log(o1);

// static değişken sadce class ismi üzerinden erişilebilir
console.log(Ogrenci.ogrenciSayisi);
