/*
 * Interfaceler typeda olduğu gibi farklı bir/birkaç interfacein özelliklerini miras alabilir. Bunu extends anahtar keliemsi ile yapar.Sınıflardan farklı olarak istersek birden fazla interface'i miras alabilirz
 */

interface EvEsyasi {
  isim: string;
  fiyat: number;
}

// burada evesyasi interface'inin tiplerini mobileya interface'ine miras aldık
interface Mobilya extends EvEsyasi {
  renk: string;
}

const masa: Mobilya = {
  isim: "Yemek Masası",
  fiyat: 20000,
  renk: "Siyah",
};

// farklı bir interface tanımlayalım
interface Elektronik {
  marka: string;
  garantiSuresi: number;
  şarj?: number;
}

// birdeb fazla interface'i miras alama
interface Urun extends Elektronik, Mobilya {
  id: string;
}

const tv: Urun = {
  marka: "LG",
  isim: "Smart TV",
  garantiSuresi: 2,
  renk: "Beyaz",
  fiyat: 35999,
  id: "213423DSA",
  şarj: 100,
};

// SORU: İlk olarak 2 farklı interface yazınız
// Devamında yeni 3.bir interface oluşturup ilk 2 interface'i miras alamasını sağlayın
// Son olarak bu interface en az 1 nesnenin tipini tanımlarken kullanın

// CEVAP
interface Ayakkabı {
  marka: string;
  beden: number | string;
  fiyat: number;
}

interface Giyim {
  renk: string;
  kullanım: string;
}

interface Urun2 extends Ayakkabı, Giyim {
  üretim: string;
}

const urun: Urun2 = {
  marka: "adidas",
  beden: 45,
  fiyat: 5000,
  renk: "gary",
  kullanım: "üst Giyim",
  üretim: "usa",
};

// CEVAP
interface Personel {
  ad: string;
  soyadı: string;
  yas: number;
}

interface Atama {
  yeniGörevi: string;
  eskiGörevi: string;
}

interface Uygulama extends Personel, Atama {
  tcNo: number;
}

const Deneme: Uygulama = {
  ad: "Baki",
  soyadı: "Tekin",
  yas: 32,
  yeniGörevi: "Ağrı",
  eskiGörevi: "Ankara",
  tcNo: 12345,
};
