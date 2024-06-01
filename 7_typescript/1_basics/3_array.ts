/*
 * Array Type:
 * Typescriptde dizilerin tipini tanımlarken sadece bu değişkenler bir dizi olucak demiyoruz.
 * Bu dizinin içerisnde şu tipte elemanlar olucak diyoruz.
 * Sonuç olarka dizinin içerisndeki elemanların veri tipinide söylemeliyiz.
  
 * Tanım:
 * tip[] 

*/

// Örnek - 1
const users: string[] = ["Gül", "Fatma", "Ali"];

// bu tip tanımı sadece değişkene değer atması yaprken değil bütün dizi methodlarında devreye girer

// users.push(45)

// Örnek - 2
const prices: number[] = [45, 5645, 324534, 9878, 324523];

// Örnek - 3
const boolean: boolean[] = [true, false, false, true, true];

// Örnek - 4
const cars: object[] = [{ name: "BMW" }, { name: "Mercedes" }];

/*
 * Soru: Bir dizi içerisninde birden fazla tipte veri olmasını istiyorsak naparız?

 * Cevap: Normalde bir dizide tek türde veri olması beklenir.
 * Bazı durumlarda birden fazla tipte veri alan diziler olabilir.
 * "Union Type" kullanarak bu sorunu çözeriz
 * "Union Types (Birleşik Tipler)" "|" ile kullanılır.
 * string | number > string yada number olabilir
*/

let teachers: (string | null)[] = ["Uğur", "Ahmet", null];

let x = "ahmet";
