// Bir türü tanımlarken generic kullanım oluştuduğumuz türün yeniden kullanıabilir olmasını sağlar

type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (i: number) => T;
};

const numberArray: ArrayType<number> = {
  items: [1, 2, 34, 5, 6],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

const stringArray: ArrayType<string> = {
  items: ["merhaba", "deneme", "test"],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

// Bir yapı birden fazla generic tür alabilir.
interface exa<T, Z> {
  ad: T;
  age: Z;
}

const foo: exa<string, number> = {
  ad: "ali",
  age: 123,
};

// SORU
// Dışarında en az 2 generic tip alan bir type,interface,fonksiyon veya class tanımlayın
// Daha sonrasında oluşturduğunuz generic tipe değer gönderek kullanınız

// CEVAP
type notes<T, U> = {
  first: T;
  second: U;
};

let not1: notes<string, number> = {
  first: "Doksan",
  second: 90,
};

// İsimlendirme yaygın kullanılan
// T
// R
// Z
// E
// V
