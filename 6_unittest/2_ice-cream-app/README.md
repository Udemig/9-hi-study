# Kütüphaneler

- json-server
- bootstrap
- axios@^0.27.2
- @testing-library/user-event@14.0

# Selectors - Seçiciler

- Test içerisnde elementleri çağırmaya yarayan methodlar
- screen aracılığı ile kullanılır
- https://testing-library.com/docs/queries/about

# HTML Element Rolleri

- Her html elementinin bir rolü vardırı bazılarının etiket ismi ile aynı bazılarının ise farklıdır
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Matchers

- exptect komutu ile birlikte kullanbınlan elemnent üszerindeki beklentimizi ifade eden methodlar. (rengi kırmızıdır | checbox tiklenmiştir | ekranda vardır | yazıd içerisğine sahiptir)

- ELEMENTLER İÇİN: https://github.com/testing-library/jest-dom
- DİĞER: https://jestjs.io/docs/using-matchers

# Test Geliştirme Süreci

## TDD (Test Driven Development)

- Önce testler yazılır daha sonrasında işlevler kodlanır
- red to green
- Artısı, testler bir yük gibi gelmiyor. Geliştirme sürecinin bir parçası oluyorç Testleri yazarken dinamik yapının algoritmasını oluşturduğumuz için işlevi daha hızlı kodlayabiliyoruz

## BDD (Behaviour Driven Development)

- Önce özellik geliştirilir ardından testleri yazılır

# FireEvent

- rtl içerisinde gelen olay tetikleme methodu
- gerçek kullanıcadan uzak tepkiler verdiği içiçn yerini userEvent'e bıraktı
- tetiklenen olaylar gerçek bir insanın tepkisinden çok daha hızlı bir şekilde aniden gerçekleştiği için testelerde tutarsılıklara sebep olabiliyor

# UserEvent

- bu yolu kullanmak için userEvent paketi indrilmeli
- firevent daha morden / gelişmiş versiyonu
- testiklediğimiz olaylar fireevnt gibi doğrudan tetiklenmesi yerine gerçek bir kullanıcyı simüle ederek bir fecikmenin ardından tetiklenir
