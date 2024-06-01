/*
 * Typescript, js'in bazı önemli açıklarını düzeltmek için Microsoft tarafından geliştirilen bir programalam dilidir.

 * Açıklar:
 * * Js'de tanımladığımız bir değişkenin daha sonra tanımlrarken farklı tipte bir veri atayabiliyoruz bu projede beklenemedik ve tespit edilmesi güç sorunlar ortaya çıkarabilir. ts ise daha kodu derlemeden bu tarz durumlarda vscode içerisnde bizi uyarır
  
 * * JS'de otomatik tamamlama desteği yok. ts'de ise type'ını taımlarasak api'dan gelen verilerde bile oto tamamlama devreye girer.

 * * kodu editörde yazarken hata tespiti yok.

 * * js'de değişken veya fonksiyponlarda tip ataması yapamıyoruz.

 Not: Typescript kodları tarayıcı tarafından doğrudan okunamaz. Eğer ts kodunu çalıştırmak istiyorsak önce js'e derlememiz gerekli.

 * TSC: Typescript Compiler
 * Yazılan typescript kodunu js'in istediğimiz sürümüne derler.
 * Kullanabilmek için typescript pkaedeni global olarak kurmuş olmamız gerekli.
*/

const username: string = "ahmet";

// username = 45;

console.log(username);

let age: number = 50;

// age = "35";

const nesne = {
  key1: "asdas",
  key2: "sadfasfd",
};

console.log(nesne.key2);
