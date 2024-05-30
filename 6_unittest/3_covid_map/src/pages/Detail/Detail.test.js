import { render, screen } from "@testing-library/react";
import Detail from ".";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { storeData } from "../../utils/constant";

// test ortamındaki store'un krulumunu yap projede thunk kullandığımız için onuda tanıtıyoruz
const mockStore = configureStore([thunk]);

it("yüklenme durumunda loader bileşenleri ekrana basılır", () => {
  // loading durumunda storedaki veriyi simüle et
  const store = mockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  // loader'lar ekrana geliyor mu kontrol et
  screen.getByTestId("header-loader");
  screen.getAllByTestId("card-loader");
});

it("hata gelme durumunda error bileşeni ekrana basılır", () => {
  const store = mockStore({
    isLoading: false,
    error: "404 not found",
    data: null,
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  // hatanın mesajını içeren mesaj ekrana basıldı mı
  screen.getByText(/404 not found/i);
});

it("veri gelme durumunda  ülke bilgisi ve kartlar ekrana basılır", () => {
  const store = mockStore(storeData);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  // 1) Ülke detayları ekrana geliyor mu?

  // ekrandaki resmi al
  const img = screen.getByRole("img");

  // resmin kaynağı datadaki resim url ile aynı mı kontrol et
  expect(img).toHaveProperty("src", storeData.data.country.flags.png);

  // ülke ismi geliyor mu?
  screen.getByText(storeData.data.country.altSpellings[1]);

  // 2) Kartlar ekrana geliyor mu ?

  // nesneyi diziye çevir
  const arr = Object.entries(storeData.data.covid);

  // dizideki bütün elemanların key ve value değerleri ekrana basılıyor mu
  arr.forEach((item) => {
    // başlık ekrana geldi mi?
    screen.getByText(item[0].split("_").join(" "));

    // değer ekrana geldi mi?
    screen.getAllByText(item[1]);
  });
});
