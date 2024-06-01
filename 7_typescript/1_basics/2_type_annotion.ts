/*
 * Type Annotion
 * Javascript'te değişkenin türünün belirleme gibi bir özellik söz konusu değil.
 * Fakat typescript'de tanımladığımız değişkenlerin tiplerinide belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlmasının dışarısında çıkamıyoeuz.
 * Bu dururm kodda oluşabilecek hataların erkenden önüne geçmemizi sağlar
 */

let foo: number;

foo = 60;

foo = 999;

// foo = "56";

/*
 ? Javascript Veri Tipleri
 * string
 * number
 * boolean
 * array
 * object
 * function
 * undefined
 * null
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
  
 * bu veri tiplerinni tamamını tip ataması yaparken kullanabiliyoruz 
*/

let project: string = "Event App";

let person_age: number = 45;

let has_license: boolean = true;

let student: object = {
  id: 2,
  name: "Ali",
  graduation_year: 2020,
};

let bar: null = null;

let baz: undefined;

let bam: undefined = undefined;
