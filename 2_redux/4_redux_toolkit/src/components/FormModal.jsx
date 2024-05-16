import { Form, Button, Modal } from 'react-bootstrap';
import { addTask, editTask } from '../redux/slices/crudSlice';
import { useDispatch } from 'react-redux';

const FormModal = ({ editItem, isOpen, handleClose }) => {
  const dispatch = useDispatch();

  // form gönderilince:
  const handleSubmit = (e) => {
    // yenilemeyi engelle
    e.preventDefault();

    // formdata örneği olutur
    const formData = new FormData(e.target);

    // inputlardaki verileri bir nesneye aktar
    const taskData = Object.fromEntries(formData.entries());

    // düzenlenicek görev state'i null değilse
    if (editItem) {
      // reducer'daki görevi güncelle
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // reducer'a yeni görevi ekle
      dispatch(addTask(taskData));
    }

    // modalı kapat
    handleClose();
  };

  return (
    <Modal centered show={isOpen} onHide={handleClose} className="text-dark">
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? 'Görevi Düzenle' : 'Yeni Görev Ekle'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              name="title"
              placeholder="Navbarı Düzenle"
              defaultValue={editItem?.title}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              name="author"
              defaultValue={editItem?.author}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanıcak Kişi</Form.Label>
            <Form.Control
              name="assigned_to"
              defaultValue={editItem?.assigned_to}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              name="end_date"
              defaultValue={editItem?.end_date}
              type="date"
              required
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? 'Kaydet' : 'Oluştur'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
