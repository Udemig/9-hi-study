/*
 * Rest Param
 * Parametre listesesinin belirsiz veya sınırsız olduğu durumlarda kullanılır
 
 * Özellikler
 * Bir parametreyei rest param haline getirmek için ... kullanırız.
 
 * Bir rest paramın ardından herhangi bir farklı parametre yazılamaz (sebebi rest paramın kaç tane değer alıcağının belli olmamaası)
 
 * Rest parametre en son gönderilen değerleri diziye çevirir.
 */

function toplam(metin: string, ...sayilar: number[]) {
  return metin + sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(toplam("Sonuç: ", 99, 45, 89, 23, 2, 56, 78, 80, 45));
console.log(toplam("Sonuç: ", 78, 80, 45));
console.log(toplam("Sonuç: ", 78));

// Örnek
// Öğrencileri alıp yoklamasını yapan bir fonksiyon yazınız her bir öğrenci için conole "Ali Burda" şeklinde bir metin yazılsın

const yoklama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " yoklama alıyor");
  students.forEach((student) => console.log(student + " burda"));
};

yoklama("Ali", "Ayşe", "Fatma", "Burak", "Ersin", "Emre");

/*
 * SORU
 * İstendildiği kadar sayi gönderilebilen
 * Aldığı ilk 2 parametreyi toplayan
 * İlk 2 parametre dışındaki geriye kalan sayıları çarpan
 * bir fonksiyon yazınız
 * toplam ve çarpım sonucunu bir nesne içinde döndürsün
  
 * bu değerler girildiğinde: x(5,7,3,9,2) 
 * bu sonucu vermeli: {toplam:12,carpim:54}
 */

// CEVAP:
function islemYap(...sayilar: number[]): { toplam: number; carpim: number } {
  if (sayilar.length < 2) {
    throw new Error("En az iki sayı girilmelidir.");
  }

  const toplam = sayilar[0] + sayilar[1];

  const geriKalanlar = sayilar.slice(2);

  const carpim = geriKalanlar.reduce((acc, sayi) => acc * sayi, 1);

  return { toplam, carpim };
}

const sonuc = islemYap(5, 7, 3, 9, 2); // { toplam: 12, carpim: 54 }
console.log(sonuc);

// CEVAP
function islemYap2(sayi1: number, sayi2: number, ...sayilar: number[]) {
  // ilk iki sayıyı topla
  const toplam = sayi1 + sayi2;

  // geriye kalan sayıları çarp
  const carpim = sayilar.reduce((toplam, sayi) => toplam * sayi, 1);

  // return ed
  return { toplam, carpim };
}

const sonuc2 = islemYap2(5, 7, 3, 9, 2);
console.log(sonuc2); //{ toplam: 12, carpim: 54 }
