# Tanstack Query

- Eski adıyla react-query isimli kütüphane, react uygulamalarında apidan alınan verileri daha verimli ve kolay bir şekilde yönetmek için kullanılan yaygın bir kütüphanedir. Veri alımı, Veri Yönetimi, Önbellekleme (Caching) işlemlerini basitleştirir.

# Temel Kavramlar

1. Query (Sorgu): Verileri almak için kullanılan kavramdır. (GET)

2. Mutation (Değişiklik): Bir mutatiın, api verilerini değiştirmek için yapılan bir işlemdir. (POST,PUT,DELETE)

3. Cache (Önbellek):React query, alınan veirleri otomatik olarak onbelleğe alır ve gerektiğinde önbellekteki verileri kullanarak performansı arttırır.

4. Automatic Refecting: Belirli olaylar gerçekleştiğinde useEffect kullanamdan tekrardan veri alma isteği atabiliyoruz

5. Devtools (Geliştirici Araçları): React query kullandığımız uygulamalardaki soguları ve mutationları izleme ve yönetememizi sağlayan eklenti

6. Invalidate: Mevcut bir sorgunun tekrardan çağrılması olayı.


# Kurulum

- npm i @tanstack/react-query

- main.jsxde gerekli kurulumları yap
