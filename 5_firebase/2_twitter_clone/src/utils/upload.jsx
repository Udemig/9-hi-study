import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import { v4 } from "uuid";
import { toast } from "react-toastify";

// dosyayı storage'a yükleyen foksiyon
const upload = async (file) => {
  // 1) dosya resim değilse veya dosya yoksa fonksiyonu durdur
  // dosya ismi image kelimesi ile başlammıyorsa kontrolü yaptık
  if (!file?.type.startsWith("image") || !file) return null;

  // 2) dosyanın yükleniceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  try {
    // 3) referansını olupşturduğumuz konuma dosyayı yükle
    await uploadBytes(imageRef, file);

    // 4) yüklenen dosyanın url'ini al ve return et
    return await getDownloadURL(imageRef);
  } catch (err) {
    toast.error("Resim yüklenirken bir sorun oldu");
  }
};

export default upload;
