/*
 * Optional Param
 * Normal şartlarda fonksiyonu çağarıabilmemiz için parametrelerin tamamını göndermemeiz gerekir.
  
 * Bazı durumlarda bazı parametreler zorunlu olmayabilir. Bu durumlarda opsiyonel parametreler kullanılır 

 * Tanım: (a:number,b?:number) =>

 * Eğer opsiyonel parametreyi göndermeszek udenfied değer gelir.

 * Opsiyonel parameteler her zaman en sonda yer alır

 * Opsiynel bir parametrenin ardından zorunlu bir parametre tanımlanamaz
 */

function exaFunc(par1: number, par2: string, par3?: boolean) {
  console.log("1.parametre", typeof par1);
  console.log("2.parametre", typeof par2);
  console.log("3.parametre", typeof par3);

  console.log("-----------------------");
}

exaFunc(99, "sadasd", true);

exaFunc(12, "test", undefined);

exaFunc(54, "test");

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman},  ${isim}`;
  } else {
    return `Merhaba, ${isim}`;
  }
};

console.log(karsilama("ahmet", "akşamlar"));

console.log(karsilama("ayşa"));
