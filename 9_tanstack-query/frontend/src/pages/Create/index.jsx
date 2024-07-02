import Container from "../../components/Container";
import { inputs } from "../../constants";
import InputField from "./InputField";
import { useMutation } from "@tanstack/react-query";
import { addPlace } from "../../api/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  // post isteği için mutasyon oluştur
  const mutation = useMutation({
    mutationKey: ["add"],
    // api isteği atıcak fonk.
    mutationFn: (data) => addPlace(data),
    // istek başarılı olursa
    onSuccess: () => {
      toast.success("Konaklama Oluşturuldu");
      navigate("/");
    },
    //istek başarısız olursa
    onError: () => {
      toast.error("İşlem Başarısız oldu");
    },
  });

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki verileri al ve nesneye çevir
    const form = new FormData(e.target);
    let data = Object.fromEntries(form.entries());

    // özellikleri diziye çevir
    data.amenities = data.amenities.split(",");

    // müsait değerini boolean olarak ayarla
    data.availability = data.availability ? true : false;

    // api'a istek at
    mutation.mutate(data);
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5"
      >
        {inputs.map((props, key) => (
          <InputField key={key} {...props} />
        ))}

        <button
          disabled={mutation.isPending}
          className="mt-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600 disabled:bg-blue-300"
        >
          Oluştur
        </button>
      </form>
    </Container>
  );
};

export default Create;
