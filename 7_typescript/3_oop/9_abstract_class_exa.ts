// Soyut Sınıf
abstract class DataFetcher {
  constructor(apiURL: string) {}

  // soyut methodlar
  abstract getData(apiKey: string): object[];
  abstract deleteData(id: string): void;
}

// soyut sınıfın miras alan yeni bir sınıf oluşturucaz
// sınıfın içerisndeki yarım akalan abstract methodları tanımla
class Spotify extends DataFetcher {
  getData(apiKey: string): object[] {
    console.log("api ile haberleşiliyor...");

    const res = {
      ok: true,
      status: 200,
      data: [{ name: "Müzik1" }, { name: "Müzik2" }],
    };

    return res.data;
  }

  deleteData(id: string): void {
    console.log(id + " id li eleman için silme isteği atıldı");
  }
}

const spotify = new Spotify("www.api.spotfiy.com");

console.log(spotify.getData("asdq12312"));
spotify.deleteData("212");
