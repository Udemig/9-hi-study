/*
 * Any Type
 * Bir değişkene any type atadığımız zman herhangi bir tür kısıtlamasına maruz kalmaz.
 
 * TS any type ile tanımlanmış olan bir değişken js değişkeni gibi davranır. Yani değişkene herhangi türde veri atanabilir.

 * Otomatik tamamlama o değişken için devre dışı kalır.

 * Normal şartlarda any kullanılması ts mantığına aykırıdır. Çünkü ts'deki amaç her değişkenin türünnün belli olmasısır.

 * Any tipi genelde "geçici olarak / acil" durumlarda kullanılır. Örn Api'dan gelen bir verinin tipini tanımlamak için önce verinin gelmesi gerekir. bu noktada veriyi alıp tipini tanımlayana kadar geçici olarak veri tipi any tanımlanabiliir. Farkl bir örn: Acil yetiştirmemiz gereke nbir task var ve değişken tipini tanımlayacak zamanımız yok projeyi çalışır hale getirip tipler any olarak tanımlanabilir. Daha sonra vakit olunca projedki bütün any tipleri kaldırıp yerlerine asıl dğeişken tipleri atanmlıdır.
*/

let foo: any;

foo = {};
foo = [];
foo = "merhaba";
foo = 35;
foo = () => {};

// SORU: bir dizi içerisindeki farklı veri tipleri var ise any kullanabilir miyiz?

// CEVAP: Sadece any tanımı yerine any[] daha doğru bir kullanım olur.

let bar: any[];

bar = ["string", 35, {}];
