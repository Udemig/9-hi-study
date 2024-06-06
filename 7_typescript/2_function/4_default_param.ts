/*
 * Default Param (Varsayılan Değere Sahip Parametre)

 * Bazı opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyiz bunun yerine varsyılan değere sahip olması istenebilir

 * Özellikler
 * Default parama vasyılan değer verirken "=" ifadesi kullanılır
 */

function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

/*
 * Soru:
 * Herkes en az 1 zorunlu en az 1 default parametreye sahip bir fonksiyon yazsın
 * Ardından fonksiyonu hem parametreyi göndererek hemde göndermeden çalıştırsın
  
 * kdv oranı hesaplayan | zam - indirimli fiyat hesap 
 */

// CEVAP
function kdvOrani(fiyat: number, kdv: number = 0.18) {
  console.log(`Ürün Fiyatı:  ${fiyat * kdv + fiyat}`);
}

kdvOrani(400, 0.35);
kdvOrani(400);

// CEVAP
function isThereAge(name: string, age: number = 0) {
  console.log(`Hello ${name} , ${age}`);
}

isThereAge("Ali", 34);
isThereAge("Ali");

// CEVAP
function aracFun(
  marka: string = "BMW",
  model: string | number = "m8",
  price: number = 100000
) {
  console.log(`arabam: `, marka, model, price);
}

aracFun();
aracFun("mercedes", "c200d", 14000000);
