/*
  ! Type Guards

  * Type guardsın amacı belirli bir türdeki değeri kontrol etmek ve bu türe özgü işlemleri gerçekleşttirebilmek için kullanılan bir tekniktir

   * 2 yaygın typeguard yöntemi bulunur (typeOf,instanceOf)
*/

// 1) typeOf opetörü ile typeGuard tekniğini uygulayalım

function log(input: string | number): void {
  if (typeof input === "string") {
    console.log("Girilen değer bir metindi: ", input);
  } else {
    console.log("Girilen değer bir sayıydı: ", input);
  }
}

log(3154245);

log("ali");

// 1) instanceOf opetörü ile typeGuard tekniğini uygulayalım

// iki örnek class oluşturalaım
class Rabbit {}
class Bird {}

// Rabbit classından örnek alalım
const tavsan = new Rabbit();

// tavsan nesnenin hangi class'tan oluşturuğunnu kontrol edelim
console.log(
  "tavşan Rabbit classının bir örneğidir: ",
  tavsan instanceof Rabbit
);
console.log("tavşan Bir classının bir örneğidir: ", tavsan instanceof Bird);

// Örnek 2
class Cat {
  meow(): void {
    console.log("🐈🐈 miyav miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶 hav hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kopek);
