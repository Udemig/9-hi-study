/*
 * Tuple Types
 * Typescipt ile birlikte hayatımıza giren bir veri tipidir.
 * Uzunluğu sabit ve elemanlarının sırası / tipi belirli olan dizilerin tipini tanımlamak için kullanılırız.
  
 * Kullanım
 * Bir dizi içerisnde tipleri sıralarız
 * Örn: [number,string,stringiobject] 
 */

// Örnek - 1
const ders1: [string, number] = ["Fizik", 86];

// Örnek - 2
// Bir renk geçişi içiçn veri tipi tanımlayalım
const gradient: [string, number, number] = ["to right", 2552552, 89898989];

// Soru: Zaten union types ile aynı tipi tanımlamıyor muyduk?
// Cevap: Hayır, benzer ama işlevsel olarak farklı union type'da dizideiki elemanların sırasını veya uzunluğunu sötleyemeyiz ama tuple ile belirtebiliriz

// Örnek - 3
// Bir css rgb/rgba renginin değerlerini dizi içerisinde tutalım
// rgb(123,56,67)
// rgba(123,56,67,0.6)

// yukarıdaki örnekte opacity değeri bazen tanımlanır bazen tanımlanmaz
// tuple'da bir değeri opsiyonel yapmak için ? koyarız
let color: [number, number, number, number?];

color = [123, 56, 78];
color = [123, 56, 78, 0.7];

// SORU: Birden fazka opsiyonel değer olabilir mi?

// CEVAP: evet, ama bir kural hepsi en sonda olmalı
// Bir opsiyonel elemnandan sonra zorunlu elelman ge-le-mez
let date: [number, string?, number?];

date = [10, "Ocak", 1999];

date = [10, "Ocak"];

date = [10];

date = [10, undefined, 1999];

// Gerçek projede tuple

// const [state, setState]: [string, (value: string) => void] = useSpecialState("");
