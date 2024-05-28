import { getByTestId, render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("sosları ekleme ve çıkarma işleminin toplam fiyata etkisi", async () => {
  const user = userEvent.setup();

  // 1) bileşeni renderla
  render(<Toppings />);

  // 2) bütün sos checboxlarını al
  const toppings = await screen.findAllByRole("checkbox");

  // 3) toplam spanı al
  const total = screen.getByTestId("total");

  // 4) tüm checboxların tiksiz olduğunu kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());

  // 5) toplam ücret 0
  expect(total.textContent).toBe("0");

  // 6) cheboxlardan birini tikle
  await user.click(toppings[0]);

  // 7) toplam fiyat 3 mü
  expect(total.textContent).toBe("3");

  // 8) checkboxlardan birini daha tikle
  await user.click(toppings[4]);

  // 9) toplam fiyat 6 mı
  expect(total.textContent).toBe("6");

  // 10) ilk tiklenini kaldır
  await user.click(toppings[0]);

  // 11) toplam fiyat 3 mü
  expect(total.textContent).toBe("3");

  // 12) ikinci tikleneni kaldır
  await user.click(toppings[4]);

  // 11) toplam fiyat 0 mı
  expect(total.textContent).toBe("0");
});
