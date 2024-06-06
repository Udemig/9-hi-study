/*
 * void: bir fonksiyonun bir şey döndürmedğini ifade etmek için kullanılır

 * void varsa return satırı sadece fonksiyonu durdurma amcıyla kullanılabilir yani değer döndüremez
*/

function selamla(): void {
  console.log("Selam, nasılsın?");

  return;
}

/*
 * Never: hata üreten fonksiyonlarda kullanılır.
 * Örneğin bir fonksiyon sürekli olarak hata fırlatması durumu.
 * "Hiç bir zaman bu noktaya ulaşılamaz" durumu
 */

function hataFonksiyonu(message: string): never {
  throw new Error(message);

  console.log("selam");
}

try {
  hataFonksiyonu("Sorun Oluştu");
} catch (err) {
  console.log("Fonksiyon göreivini tamamlayamadan hata fırladı", err);
}

/*
 Sonuç Olarak
 * fonksiyon return tipi
 * any ise herhangi bir türde veri döndürebilir
 * void ise hiç bir değer döndürmez
 * never ise bir hata fırlatır yani return asla çalışmaz
*/
