- State: Uygulamadaki bileşenlerin sahip olduğu bilgi özellikler

# State Yönetme

- Prop Drilling: Bileşenlerde yukarıdan aşşağıya veri'yi aktarması

- Context: Uygulamadaki state'i bütün bileşenler tarafından erişlebilen ve oluşturduğumuz merkezler tarafından yönettiğimiz state yönetim aracı

- Redux: Bileşelerin sahip olduğu ve merkezi olarak yönetilmesi gerken state'leri yönettiğimiz merkezi state yönetim aracı

# Neden Context yerine Redux

- Kod tekrarı contexte göre daha az
- Performansı daha iyi
- Bileşen içerisndeki karışılığı daha azaltır
- Hata ayıklama daha kolaydır (redux devtools)
- Orta veya büyük ölçekli projelerde satet yönetimini daha kolay hale getirir.

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulumanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu

2. Reducer: Bir state tutar ve aksiyondan aldığı talimata göre tutulan state'in nasıl değişeceğine karar verir.

3. Action: Reducerlardaki state'i güncellemek için gönderdiğimiz talimat / emir / eylem / haber.

- - Action iki değere sahip bir nesnedir
- - type (zorunlu): Eylemi tanımlayan bir string
- - payload (opsiyonel): Eylemin verisi

4. Dispatch (Sevketmek): Eylemin gerçekleştiğini reducer'a ileten method

5. Subscribe (Abone Olmak): Bileşenlerin store'da tutulan veriye erişim sağlaması.

6. Provider (Sağlayıcı): Store'da tutulan veriyi uygulamaya sağlıyor

# Gerçek Hayttan Benzetme

1. Store: Okul Binası

2. Reducer: Okulun Yönetim EKibi (Müdür, Müdür Yard.)

3. Action: "Öğrencinin Sınavı Geçmesi" | "Yeni Öğrencinin Kayıt Yapması" | "Öğrencinin Okuldan Atılması"

4. Dispatch: Öğrenci İşleri | Öğretmen

5. Subscribe: Rehberlik Servisi | E-Okul

6. Provider: MEB

# Redux Kurulum Aşamaları

1. `redux` ve `react-redux` paketlerini indir
2. reducer / reducer'ların kurulumunu yap
3. store'u oluştur
4. store'u projeye tanıt

# CRUD

- Create Read Update Delete

- Oluştur Oku Güncelle Sil
