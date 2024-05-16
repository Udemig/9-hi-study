import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import { toast } from 'react-toastify';

const AddForm = () => {
  // dispatch methodunun kurulumu
  // useDispatch hookunu çağırırız o da geriye bu bileşende dispatch yapabilememezi sağlaycak olan methodu döndürür
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // yazı boş mu kontrol et boşsa fonksiyonu durdur ve bildirim gönder
    if (!text) return toast.warn('Lütfen görev içeriğini belirleyin');

    // store'a kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(), // id oluşturan method
      text,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // yeni bir todo'nun ekleniceğini reducer'a haber ver
    dispatch(addTodo(newTodo));

    // formu sıfırla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        placeholder="örn: typescript projesi"
        type="text"
        className="form-control"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
