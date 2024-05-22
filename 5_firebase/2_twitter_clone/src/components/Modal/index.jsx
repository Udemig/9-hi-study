import { doc, updateDoc } from "firebase/firestore";
import { IoMdClose } from "react-icons/io";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";
import upload from "../../utils/upload";

const Modal = ({ tweet, close }) => {
  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const text = e.target.title.value;
    const file = e.target.file.files[0];

    // güncellenicek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    try {
      if (!file && !file?.type.startsWith("image")) {
        // eğer fotoğraf seçilmediyse sadece yazıyı güncelle
        await updateDoc(tweetRef, {
          textContent: text,
          isEdited: true,
        });
      } else {
        // seçilidyse hem yazı hemde fotoğrafı güncelle

        // seçilen fotoğrafı storage'a yükle
        const newUrl = await upload(file);

        // belgenin hem yazı hem foto değerini güncelle
        await updateDoc(tweetRef, {
          textContent: text,
          imageContent: newUrl,
          isEdited: true,
        });
      }

      toast.success("Tweet başarıyla güncellendi");
    } catch (err) {
      toast.error("Bir sorun oluştu");
    }

    // modalı kapat
    close();
  };

  return (
    <div className="fixed inset-0 w-full h-full grid place-items-center bg-gray-500 bg-opacity-40">
      <div className="bg-black rounded-md py-10 px-8 w-3/4 min-h-[60vh] max-h-[80vh] flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Tweet'i Düzenle</h1>

          <button onClick={close}>
            <IoMdClose className="text-3xl transition hover:text-gray-500" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 mt-10 flex flex-col justify-between"
        >
          <div className="flex flex-col">
            <label className="mb-5">İçeriği Değiştir</label>
            <input
              name="title"
              defaultValue={tweet.textContent}
              className="border rounded-md p-1 text-black"
              type="text"
            />

            <label className="mt-10 mb-5">Fotoğraf Değiştir / Ekle</label>
            <input name="file" type="file" />
          </div>

          <div className="flex justify-end gap-5">
            <button
              onClick={close}
              type="button"
              className="bg-gray-500 py-2 px-4 rounded-full hover:bg-gray-600"
            >
              Vazgeç
            </button>

            <button
              type="submit"
              className="bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
