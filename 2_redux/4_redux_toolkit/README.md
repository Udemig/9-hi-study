# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde edebiliyoruz.

- Dahili olarak thunk paketi içerisnde gelir.

- Redux Devtools eklentisi sayesinde proje geliştirirken store'u reducer'ları dispatch edilen aksiyonları an ve an izleyebiliyoruz

- Proje içerisndeki state'i yönetmek bizim için daha kolay olucak

# Kurulum

- `npm install @reduxjs/toolkit`

- `npm install react-redux`

- paketleri indiriken hata verirse --force flag'ini kullanrak sürüm uyarısını görmezden gelebilrisiniz: `npm install --force paket_ismi`

- store'u ve reducer'ları oluştur

- store'u projeye tanıt

# Slice

- Redux toolkit'in içerisnde yer alan tek bir noktada hem reducer hem action hemde action'typelarını tanımlamızı sağlayan yapıdır

- Klasik reduceta aksiyon'ları reducer'ları type'larını ayrı ayrı dosylarda tanımlarken çok fazla vakit kaybediyorduk aynı zamanda kod tekrarı oluyordu.

- Toolkit ile birlikte bir slice tanımlayarak bu 3 yapıyıda tek dosyada daha az kodla oluşturabiliyoruz
