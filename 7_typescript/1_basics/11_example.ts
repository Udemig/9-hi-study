/* 
 Herkes içerisinde en az 1:
 string
 number
 boolean
 array > string[]
 object
 tuple
 union > string | number
 any
 string literal
 tiplerinde veri barındıran bir custom type oluştursun ve bu oluşturulan tipi en az bir kere kullansın
 */

type YeniTransfer = {
  isim: [string, string, string?]; //tuple
  numara: number;
  mevkii: "kaleci" | "defans" | "ortasaha" | "forvet"; //literal string
  lisans: boolean;
  menejerlik?: string | number; //union type
  eskiTakimlar: string[];
  istatistik: {
    sariKart: number;
    kirmiziKart: number;
    gol?: number; //opsiyonel
    asist?: number;
  };
};

const Burak: YeniTransfer = {
  isim: ["Burak", "Gani", "Dinçer"],
  numara: 11,
  mevkii: "ortasaha",
  lisans: true,
  eskiTakimlar: ["Beşiktaş", "İdealtepespor", "Kartalspor"],
  istatistik: {
    sariKart: 6,
    kirmiziKart: 1,
    asist: 11,
  },
};
console.log(Burak);

// CEVAP
type Araç = {
  marka: string;
  model: number | string;
  satildiMi: boolean;
  özellikleri: string[];
  kapasite: number;
  hasargeçmişiVeYılı: [boolean, number];
  özellikler: "benzin" | "dizel" | "hybrit";
};

// CEVAP
type Arac = {
  marka: string;
  model: string;
  yil: number;
  otomatik: boolean;
  ozellikler: string[]; // Özelliklerin listesi
  sahibi: {
    isim: string;
    yas: number;
    ehliyetli: boolean;
  };
  bakimKaydi: [string, number];
  kimlik: string | number;
  diger: any;
  durum: "yeni" | "kullanilmis" | "sertifikali";
};

const ornekArac: Arac = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2021,
  otomatik: true,
  ozellikler: ["Klima", "Navigasyon Sistemi", "Bluetooth"],
  sahibi: {
    isim: "Ahmet Yılmaz",
    yas: 35,
    ehliyetli: true,
  },
  bakimKaydi: ["Yağ Değişimi", 100],
  kimlik: "123ABC456",
  diger: { oncekiSahipler: 1 },
  durum: "sertifikali",
};

// CEVAP

type PcMarkasi = {
  isim: [string, string?]; //tuple
  model: string;
  isletimSistemi: "Windows" | "macOS" | "Linux"; //literal string
  fiyat: number;
  garanti: boolean;
  dagitici: string | number; //union type
  eskiModeller: string[]; //array
  teknikOzellikler: {
    islemci: string;
    ram: number; // GB cinsinden
    depolama: number; // GB cinsinden
    ekranKarti?: string; //opsiyonel
  };
};
const Asus: PcMarkasi = {
  isim: ["Asus", "Teknoloji"],
  model: "ROG Strix",
  isletimSistemi: "Windows",
  fiyat: 1500,
  garanti: true,
  dagitici: "Teknosa",
  eskiModeller: ["Asus TUF", "Asus VivoBook", "Asus ZenBook"],
  teknikOzellikler: {
    islemci: "Intel Core i7",
    ram: 16,
    depolama: 512,
    ekranKarti: "NVIDIA GeForce GTX 1660 Ti",
  },
};

// cevap

type evtype = {
  name: [string, string?];
  oda: number | string;
  m2: number;
  tip: "bahceli" | "dublex" | "müstakil";
  esya: boolean;
  sahip: any;
};

const yeniev: evtype = {
  name: ["orman", "bahceli"],
  oda: 3,
  m2: 140,
  tip: "bahceli",
  esya: true,
  sahip: null,
};

// CEVAP
type Result = {
  personel: string;
  score: number;
  discount: boolean;
  products: string[];
  details: {
    model: string;
    price: number;
  };
  last_months_score: [number, number, number];
  gift_prim: string | number;
};

const exam: Result = {
  personel: "Ali",
  score: 800,
  discount: false,
  products: ["3er", "5er"],
  details: {
    model: "5er",
    price: 54000,
  },
  last_months_score: [500, 700, 300],
  gift_prim: 5000,
};

// CEVAP:

let userProfile: {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  friends: string[];
  address: { street: string; city: string; country: string };
  educationHistory: [string, number][]; // [degree, year]  tuple dizisi
  contactMethod: "email" | "phone";
  notes: any;
  specialMessage: "Bonjour" | "Salut" | "Coucou";
};

const Nour = {
  name: "Nour Derman",
  age: 28,
  email: "nourdrmn@gmail.com",
  isActive: true,
  friends: ["Ali", "Fatma", "Charlie"],
  address: {
    street: "123 rue Baudoin",
    city: "Paris",
    country: "France",
  },
  educationHistory: [
    ["High School Diploma", 2010],
    ["Bachelor's Degree", 2014],
    ["Master's Degree", 2017],
  ],
  contactMethod: "email",
  notes: "completed successfully",
  specialMessage: "Bonjour",
};

// CEVAP
type Urun = {
  ad: string; // string
  fiyat: number; // number
  kategori: "Gıda" | "İçecek" | "Temizlik" | "Elektronik"; // literal string
  stoktaVarMi: boolean; // boolean
  markalar: string[]; // array
  barkod: number | string; // union type
  agirlik?: number; // optional
  urunDetaylari: [number, string, boolean]; // tuple
};

const Sut: Urun = {
  ad: "Süt",
  fiyat: 15,
  kategori: "Gıda",
  stoktaVarMi: true,
  markalar: ["Sütaş", "Pınar", "Ülker"],
  barkod: "1234567890123",
  agirlik: 1,
  urunDetaylari: [1, "Litre", true],
};
console.log(Sut);
