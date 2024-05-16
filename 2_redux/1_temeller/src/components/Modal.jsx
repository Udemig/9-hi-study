import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE } from '../redux/actionTypes';
import { updateTodo } from '../redux/actions/todoActions';

const Modal = ({ todo, close }) => {
  // useDispatch kurulum
  const dispatch = useDispatch();

  // inputun referansını oluştur
  const inputRef = useRef();

  const save = () => {
    // 1) inputtaki değeri al
    const newText = inputRef.current.value;

    // 2) todo nesnesinin text değerini güncelle
    const newTodo = { ...todo, text: newText };

    // 3) reducer'daki todos state'ini güncelle
    dispatch(updateTodo(newTodo));

    // 4) modalı kapat
    close();
  };

  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>

          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>

          <div className="modal-footer">
            <button onClick={save} type="button" className="btn btn-primary">
              Kaydet
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
