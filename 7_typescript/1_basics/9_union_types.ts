/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin tipininin alabileceği birden fazla fakrlı türde veri varsa kullanılır.
 *
 * Örn: Bir kullanıcı değişkeni var ama kullanıcı adı(string) mı yoksa id'si(number) mi gelicek kesin olarak belli değil bu noktada değişken tipini kesin olarak string veya kesin olarak number demek mümkün olmaz ve  string veya number tanımı yani union type gerekli olur
 */

let user: string | number;

user = "mustafa";

user = 3535757867;

// ÖRN: Bir telefonun verisini tutucaz ama ios telefonun değişken isimleri ile android'İn faklı olsun.

type IOS = {
  ios_version: number;
  airdrop_version: number;
  device: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: IOS | Android;

phone = {
  ios_version: 13.0,
  airdrop_version: 3.5,
  device: "Iphone 15",
};

phone = {
  android_version: "marshemellow",
  google_play_version: 19.7,
  device: "Samsung Note 9",
};
