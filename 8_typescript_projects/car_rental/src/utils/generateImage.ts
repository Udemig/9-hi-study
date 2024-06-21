import { CarType } from "../types";
import { colors } from "./constants";

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  // aracın fotosunun oluşması şiçin gerekli paramları url'e ekle
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("/")[0]);
  url.searchParams.append("zoomType", "fullscreen");

  // açı parametresi geldiyse url'e ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // colors dizisinin uzunluğuna göre rastgele bir sayı seçelim
  const i = Math.round(Math.random() * colors.length);

  // rastgele seçilen rengi url'e ekle
  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default generateImage;
