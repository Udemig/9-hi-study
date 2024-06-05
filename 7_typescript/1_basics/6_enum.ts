/*
 * Enum (Numaranlandırma)
 * Belirli değerler Kümesi
 * Benzer kategorideki değişkenleri bir arada tutmak için kullanılır
  
 * Genelde az miktarda farklı değerle sahip verilerin gruplandırılması içi kullanılır.
 
 * İsimlendirme
 * Enum isimlendiriken değişken isimlendirme kurallarına uyarız
 * ilk harf büyük olur 

*/

// Örn: Tarfik ışığının aşamlarını verisini tutalım

// klasik js:
const renkler = {
  red: 0,
  yellow: 1,
  green: 2,
};

// typescript ile:
enum Color {
  red,
  yellow,
  green,
}

let active_light = Color.yellow;
console.log(active_light); // 1

const speak = (light: Color) => {
  switch (light) {
    case Color.red:
      console.log("Lütfen durunuz.");
      break;

    case Color.yellow:
      console.log("Hazırlanın");
      break;

    case Color.green:
      console.log("İlerleyebilirsiniz");
      break;
  }
};

speak(Color.green); // İlerleyebilirsiniz

// Ornek 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day1 = Gun.Pazartesi;
let day2 = Gun[5];
let day3 = Gun[Gun.Pazar];

console.log(day1); // 0
console.log(day2); // Cumartesi
console.log(day3); // Pazar

// Ornek 3
enum Status {
  set = "Hazırlanıyor",
  travel = "Dağıtıma Çıktı",
  done = "Teslim Edildi",
}

console.log(Status.set); // Hazırlanıyor

const test = (durum: Status) => {};
test(Status.done);
test(Status.set);
test(Status.travel);

// eğer aynısını js nesnesi ile yapsaydık o nesneyi bir tip olarak kullanamazdık
const Statuss = {
  set: "Hazırlanıyor",
  travel: "Dağıtıma Çıktı",
  done: "Teslim Edildi",
};

// const test2 = (durum: Statuss) => {};
