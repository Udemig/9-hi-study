/*
 * Abtract Class (soyut Sınıf):
 * Absctract class'lar sınıflar için birer şema görevi görür.
 * Soyut sınıflar sayesinde, oluşturucuğamız sınıfların özelliklerini, methodlarını ve bunların tiplerini belirleriz
 
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar

 * Bir nevi sınıfların tipini tanımlarız
 */

abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  // normal method tanımlama
  takePicture() {
    console.log("fotoğraf çekildi");
  }

  // soyut method tanımlama
  abstract share(send_to: string): void;
}

// abstract class'ın özelliklerini ve methodlarını miras alan yeni bir class oluşturup. Oluşturduğumuz bu class'ın içerisnde yarım kalan / görevi tanımlanmamış / implement edilmemiş methodu tanımla
class Instagram extends TakePhoto {
  constructor(cameraMode: string) {
    super(cameraMode, "gece filtresi");
  }

  share(send_to: string): void {
    console.log("Çekilen fotoğraf hikaye olarak  paylaşılıyor");
  }
}

const insta = new Instagram("ön kamera");

insta.takePicture();
insta.share("ahmet");

// soyut sınıfı 2. kez miras alalım
class Twitter extends TakePhoto {
  constructor(tweet_id: number) {
    super("arka kamera", "doğal");
  }

  share(send_to: string): void {
    console.log("Çekilen fotoğraf tweet olarak paylaşıldı");
  }
}
