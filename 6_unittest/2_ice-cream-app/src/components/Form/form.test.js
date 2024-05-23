import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanmasına göre buton aktifliği", () => {
  // 1) test edilecek bileşen render edilir
  render(<Form />);

  // 2) gerekli elemanları çağır (button | checkbox)
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  // 3) checkbox tiklenmemiştir
  expect(checkbox).not.toBeChecked();

  // 4) butonun inaktitir
  expect(button).toBeDisabled();

  // 5) checkbox'ı tikle
  fireEvent.click(checkbox);

  // 6) buton aktif mi kontrol et
  expect(button).toBeEnabled();

  // 7) checboxtan tiki kaldır
  fireEvent.click(checkbox);

  // 8) buton inaktiftir
  expect(button).toBeDisabled();
});

test("Butonun hover durumuna göre bildirim gözükür", () => {
  // 1) formu renderla
  render(<Form />);

  // 2) gerekli elemanları al
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/size gerçekten/i);

  // 3) checboxı tikle
  fireEvent.click(checkBox);

  // 4) ekranda bildirim yok mu kontrol et
  expect(alert).not.toBeVisible();

  // 5) mouse'u buton üzerine getir
  fireEvent.mouseEnter(button);

  // 6) ekranada bildirim var mı kontrol et
  expect(alert).toBeVisible();

  // 7) mouse'u butondan çek
  fireEvent.mouseLeave(button);

  // 8) bildirim ekranda yok mu kontrol et
  expect(alert).not.toBeVisible();
});
