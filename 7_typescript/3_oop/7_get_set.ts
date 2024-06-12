// getter methodu veriyi almaya yarar
// setter emthodu veriyi güncellemeye yarar

// düz javascript'te getter setter method örneği
class Car {
  private battery_power: number = 10;
  private key_status: 0 | 1 | 2 = 0;
  private engine_started: boolean = false;

  // getter: mevcut bir veya birkaç propertynin değerini return eden methodlara denir.
  getEngineStatus() {
    return this.engine_started
      ? "çalışıyor " + this.battery_power + " batarya kaldı"
      : "çalışmıyor";
  }

  // setter: mevcut bir veya bir kaç propertynin değerini güncelleyeb methodalra denir.
  startEngine() {
    this.engine_started = true;
    this.battery_power -= 3;
  }
}

const tesla = new Car();

console.log(tesla.getEngineStatus());

console.log("--------------");

tesla.startEngine();

console.log("----setter çalıştı------");

console.log(tesla.getEngineStatus());

// typescriptde getter setter methodlar

class Vehicle {
  _type: string = "bisiklet";

  // getter methodu mutlaka bir değer return etmeli
  get type() {
    return "Bu aracın tipi: " + this._type;
  }

  // setter methodu mutlaka 1 paramatere almalı
  set type(value) {
    console.log("setter method çalıştı bu da parametre: " + value);
    this._type = value;
  }
}

const vehicle = new Vehicle();

// biz type özelliğine erişmeye çalıştığımız zaman nesnenin içerisndeki getter methodu devreye giricek ve onun retrun ettiği değer buraya gelicek
console.log(vehicle.type);

// type özelliğinı değiştirmeye çalıştıpımızda arkaplanda setter methodu çalışıcak atadığımız değeri parametre olarak alıcak ve nesnenein içindeki özelliği güncelleyicek
vehicle.type = "motor";

// ÖRNEK - 1
class Kisi {
  private name: string = "Ali";
  private lastname: string = "Sarı";

  get fullname() {
    return this.name + " " + this.lastname;
  }
}

const kisi = new Kisi();

console.log(kisi.fullname);

// Örnek - 2
class Circle {
  public _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // getter method
  get area() {
    return this._radius * this._radius * Math.PI;
  }

  // setter methodu
  set radius(value: number) {
    if (value < 0) {
      console.log("geçersiz yarı çap, negatif olamaz");
      return;
    }

    this._radius = value;
  }
}

const circle = new Circle(10);

console.log(circle.area);

console.log(circle);

circle.radius = 50;

console.log(circle);

circle.radius = -20;

console.log(circle);
