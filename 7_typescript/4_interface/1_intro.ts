/*
 ! Interface,
 * Bir nesnenin yapısını ve nesnenein hangi özellikelere ve methodlara sahip olcuağını ifade eder

 ! Custom Type | Abstract Class | Interface
 * Birbirine benzer görevler yapmaktadırlar.
 * 3'ününde ortak noktası bir nesnenin tipini tanımlamak için kullanılması
  
 ? Abstract Class vs Interface
 * Class'lar aynı anda sadece bir class'ı miras alabilir.
 * Interface tek seferde birden fazla interface'i miras alabilir.
 * Interfacelerde erişim belirteci bulunmaz
 
 ? Type vs Interface
 * Type ile birlikte sadece nesnenin değil bir dizi, string literal, union type vb. tipler de tanımlanabilirken interface'ler ile sadece ve sadece nesne tipini tanımlanabilir  

*/

// Type ile Obje Tipi Belirleme
type PersonType = {
  name: string;
};

const kisi1: PersonType = {
  name: "Ali",
};

// Interface ile Obje Tipi Belirleme
interface IPerson {
  name: string;
}

const kisi2: IPerson = {
  name: "Ayşe",
};

// type ile interfaceden farklı olarak nesne dışında tiplerde oluşturabiliriz
type alphanumeric = string | number;

type arrayType = string[];

type gasType = "electric" | "diesel" | "fuel";

// interfaceler ise sadece nesnelerin tipini atamak için kullanılır
interface isim {}

// İleride oluşturucağımız bir geometrik şekil nesnesinibn özellik ve methodlarını tanımladığımız interface yazalım
interface IShape {
  width: number;
  height: number;
  radius?: number;
  calculateArea: () => number | string;
}

// yukarıda interface yardımı ile tanımladığımız tipi kullanılaım
const square: IShape = {
  width: 200,
  height: 200,

  calculateArea() {
    return this.width * this.height;
  },
};
console.log(square.calculateArea());

// yukarıda interface yardımı ile tanımladığımız tipi kullanılaım
const circle: IShape = {
  width: 40,
  height: 1,
  radius: 25,

  calculateArea() {
    if (this.radius) {
      return Math.PI * this.radius * this.radius;
    } else {
      return "Lütfen yarıçap tanımlayın";
    }
  },
};
console.log(circle.calculateArea());
