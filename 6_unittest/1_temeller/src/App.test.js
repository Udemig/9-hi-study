//* App.test.js: App bileşeninin testlerini yazıldığı dosya
//* Bir dosyanın test dosyası olduğu .test.js/jsx uzantısından anlarız

/*
 * Unit Test
 * Yazdığımız dinamik olan bütün react bielşenlerini test edicez
 * Bu sayede kod değişkliği yapıldığında yaptığımız değişiklikleri githuba göndermeden önce testleri çalıştırıp her şeyin doğru çalıştığından emin olabiliriz. Büyük projelerde her işlevi el ile kontrol etmek çok fazla zaman alır ve gözden bir şey kaçma ihtimali yüksektir bu yüzden unit test ile bileşenler görevini yerine getiriyor mu diye tek tek testleri yazılır.
 
 * Kod değişikliği githuba gönderilmeden önce testler çalıştırılır ve her şeyin doğru çalıştığından emin olunur. Bu sayede her değişiklikte bütün projeyi el ile kontrol etmeye gerek kalmaz. 
 */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Button from "./Button";

// bir fonksiyonun veya bileşenin unit testini yazmak için "test" veya "it" methodu kullanılır (ikiside aynı)
// test methodu 2 parametre ister
// 1) string > testin açıklaması
// 2) fonksiyon > testin yapıldığı yer

test("react öğren linki ekrana basılır", () => {
  // test edilecek olan bileşenin test ortamında "ekrana" basılır
  render(<App />);

  // bileşeni tarayıcıda ekrana basıyor olsaydık document.querySelector vb. methodlar kullanırdık ama unit test tarayıcıda değiş donanımımızda çalışır bundan dolayı screen aracılığıyla querySelector ile aynı görevi gören farklı seçiciler kullanırız
  const linkElement = screen.getByText("React Öğren");

  // çağrılan elemandan beklentimizi test edicez
  expect(linkElement).toBeInTheDocument();
});

// buton bileşeni için test
test("Butonu tıklanma olayında renk ve yazı değiştir", () => {
  // 1) test edilecek olan bileşeni ekrana bas
  render(<Button />);

  // 2) test edilecek elementi çağır
  const button = screen.getByRole("button");

  // 3) buton rengi kırmızıdır
  expect(button).toHaveStyle({ background: "red" });

  // 4) butonda "Maviye Çevir" yazar
  expect(button).toHaveTextContent("Maviye Çevir");

  // 5) butona tıkla
  fireEvent.click(button);

  // 6) butonun rengi aquadır
  expect(button).toHaveStyle({ background: "aqua" });

  // 7) butonun "Kırmızıya Çevir" yazar
  expect(button).toHaveTextContent("Kırmızıya Çevir");
});
