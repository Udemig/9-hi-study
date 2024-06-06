/*
 * OOP(Object Orianted Programming - Nesne Tabanlı Programlama)

 * Bugüne kadar projelerimizi genelde fonksiyonlar kullanrak geliştirdik.

 * Fakat projenin kasamı arttıköa kullandığımız yaklaşım projeyi yönetimi zorlaştırabilir. Bu yüzden müjhendisler büyük projeleri yaparken yazılımcılarını işlerini kolaylaştırmak için programlama arayışına girdiler.

 * OOP: Etrafımızda bulanan nesnelerin özelliklerini ve davranışlarına göre modlleyerek yapılan programalama

 * OOP yaklaşımı içerisnde iki farklı tür bulunur.
 * Bunlar class ve interface'lerdir.
 * Sıkça karşılaşacağımız terimler
 * Class | Interface | Constructor | Extends | InstanceOf | Implements
*/

class OldPhone {
  // burası class'ın gövdesidir.
  // örnek property(özellik) leri aşşağıya yazalım
  telefon_tipi: "entegre" | "ayrılmış" = "entegre";
  tus_takimi: "döner" | "santral" = "döner";
  govde: string = "yatay";

  // örnek methodları aşşağıya yazalım
  ahizeAc(): void {
    console.log("ahize açılıyor...");
  }

  numaraCevir(telNum: string): boolean {
    console.log(
      this.tus_takimi === "döner" ? "numara çevriliyor" : "numara tuşlanıyor"
    );

    console.log("telefon çalıyor");

    return true;
  }
}

/*
 * Class'ların kullanımı
 * Bir class'ı tanımlamak aynı bir type'ı ve ya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak için yani bir class'tan örnek oluşturmak için new anahtar kelimesini kullanırız.
 * New yardımı ile class'ın bir nevi çalışan bir kopyasını oluştururuz.
  
 * Benzetme: 
 * Class'ları bir fırındaki kalıba benzetebilirz.
 * Class Aynı özelliklere ama genelde farklı değerlere sahip nesneler üretmek için kullanılır.
 * Fırında da kalıptan çıkan ekmeklerin hepsi aynı şekildedir ama içeriği farklı olabilir.
 */

const telefon1 = new OldPhone();
const telefon2 = new OldPhone();

// telefon 2 nin bazı değerlerini değiştelim
telefon2.tus_takimi = "santral";
telefon2.govde = "dikey";
telefon2.telefon_tipi = "ayrılmış";

telefon2.ahizeAc();

telefon2.numaraCevir("+905556667788");

console.log(telefon2);

/*
 * Obje ve class arasındaki ilişki
 * Class'lar tanımlanmış olan ifadelerdir objeler ise bu tanımlanmış ifadelerin çalışan halidir
 
 * Class'lar bilgisayarın RAM'inde yer kaplama ama her bir obje için RAM'de yer ayrılır.


 * JSON Objesi vs Class Objesi
 
 * Her ikiside bir nesnenedir.
 
 * Class objelerini bir ismi vardır
 * Json objelerinde bu yoktur (anonimdir)
 
 * Json objesinde objenin type'ını yazarız
 * Class onkelerinde buna gerek kalmaz direkt oluşturuldukları classın tipini alırlar
*/

// JSON Objesi
type objType = {
  name: string;
  tus_takimi: string;
};

const json_object: objType = {
  name: "eski telefon",
  tus_takimi: "entegre",
};
console.log("json objesi", json_object);

// CLASS Objesi
const class_object = new OldPhone();
console.log("class objesi", class_object);

/*
 * this kullanımı
 * bir class'ı birden fazla kopyası olabilir.
 * ve her objenin kendine ait özellik ve methodları bulunur.
 * objenin kendi içerisndeki özelliklere erişebilmesi için this anahtar kelimesini kullanırız.
 * Bu sayede objedeki bir method objenini sahip olduğu özelliklere erişip kullanabilir.
 */
class Modal {
  baslik: string = "";
  acilma_sayisi: number = 0;
  acik_mi: boolean = false;

  modal_ac(yeni_baslik: string) {
    this.baslik = yeni_baslik;
    this.acilma_sayisi++;
    this.acik_mi = true;
  }

  modal_kapat() {
    this.acik_mi = false;
    this.baslik = "";
  }
}

const uyariModal = new Modal();

console.log(uyariModal);
console.log("------------");

uyariModal.modal_ac("Günlük saat sınırını aştınız");

console.log(uyariModal);
console.log("------------");

uyariModal.modal_kapat();

console.log(uyariModal);
console.log("------------");
