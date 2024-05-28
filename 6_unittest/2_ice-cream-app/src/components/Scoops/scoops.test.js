import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/*
 ! Seçiciler > 3 ana parçadan oluşur
 1) Method Tipi 2) All İfadesi 3) Seçici Method

 * get > başlangıçta domda olan elemtleri almak için kullanılır | elemnt bulunamazsa test başarısı olur

 * query > elementin ekranda olma durumu kesin olmadığı durumlarda kullanılır get ile bezner çalışır | element bulunamazsa hata vermez null döndürür test devam eder

 * find > elementin ne zaman ekrana basılıcağı belli değise (api isteklerinde) kullanılır
 * not: find methodu kullanırsak promise döndürdüğünden async await ile kullanmalıyız
 
 * eğer methoda all eklersek seçici koşuluna uyan bütün elemanları getirir
 * all kullanırsak dönen değer her zaman dizidir 
*/

test("API'dan alınan veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  // ekrana basılan kartları al
  const images = await screen.findAllByAltText("çeşit-resim");

  // gelen resimlerin(kartların) sayısı 1 den büyük veya eşit mi?
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Çeşitlerin eklenme ve sıfırlama özellikleri toplam fiyatı etkiler", async () => {
  // userEvent kurulumu
  const user = userEvent.setup();

  // test edilecek bileşen render edili
  render(<Scoops />);

  // bütün ekleme ve sıfırlama butonlarını çağır
  const addButtons = await screen.findAllByRole("button", { name: /ekle/i });
  const delButtons = await screen.findAllByRole("button", { name: /sıfırla/i });

  // toplam fiyat elementini çağır
  const total = screen.getByTestId("total");

  // toplam fiyat 0 mı kontrol et
  expect(total.textContent).toBe("0");

  // ekle butonlarından birine tıkla TODO USER EVENT
  await user.click(addButtons[0]);

  // toplam fiyat 20 mı kontrol et
  expect(total.textContent).toBe("20");

  // bir ekle butonuna iki kez tıkla
  await user.dblClick(addButtons[2]);

  // toplam fiyat 60 mı kontrol et
  expect(total.textContent).toBe("60");

  // ilk eklenin sıfırla butonuna tıkla
  await user.click(delButtons[0]);

  // toplam fiyat 40 mı kontrol et
  expect(total.textContent).toBe("40");

  // ikinci eklenenin sıfırla butonuna tıkla
  await user.click(delButtons[2]);

  // toplam fiyat 0 mı kontrol et
  expect(total.textContent).toBe("0"); 
});
