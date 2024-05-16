import { useFormik } from 'formik';
import schema from './schema';
import InputField from './InputField';
import { inputs } from './constants';

const App = () => {
  // Form gönderildiğinde FormData yöntemi ile verilere ulaşabilyorduk. Ama hat yönetimi yapmıyorduk. Hata yönetimi yapmak istersek kodları bizim yazdığımız seneryoda çok fazla kod tekrarrı olucağı için formik & yup kütüphanelerini kullanarak bu formu yöneticez

  // useFormik formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // state'i tutulacak olan verilerin ilk değerleri
    initialValues: {
      email: '',
      age: '',
      password: '',
      passwordConfirm: '',
    },

    // validasyon şeması
    // formiğin inputlardaki verileri tanımlladığımız şemadaki koşullara uygun mu kontrol etmesini sağlar. Eğeki inputtaki veri validsasyon şemasında tanımladığımız koşullar uygun değilse formik tuttuğu error state'ini günceller
    validationSchema: schema,

    // form gönderilince çalışıcak olan fonksiyon
    // oto. olarak sayfa yenilemeyi engeller
    // 1. param olarak formdaki veirleri
    // 2. param olarak form'da çalıştırılabilecek aksiyonları alır
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(() => resolve(), 3000));

      alert('form gönderildi');
    },
  });

  return (
    <div className="vh-100 vw-100 bg-dark text-white">
      <div className="container py-5 ">
        <h2 className="text-center">Coinmania</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((props) => (
            <InputField formik={formik} {...props} />
          ))}

          <button disabled={formik.isSubmitting} className="my-5">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
