import { Container, Stack, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import FormModal from '../components/FormModal';
import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { deleteTask } from '../redux/slices/crudSlice';

const Crud = () => {
  const { isDarkTheme } = useSelector((store) => store.counterReducer);
  const { tasks } = useSelector((store) => store.crudReducer);

  // modal açık mı?
  const [isOpen, setIsOpen] = useState(false);
  // düzenlenicek olan eleman
  const [editItem, setEditItem] = useState(null);

  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Stack className="align-items-end my-5">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <Table
          striped
          bordered
          hover
          responsive
          variant={isDarkTheme ? 'dark' : 'light'}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Görev</th>
              <th>Yazan</th>
              <th>Atanan</th>
              <th>Tarih</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={task.id}>
                <td>{i + 1}</td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.assigned_to}</td>
                <td>{task.end_date}</td>
                <td>
                  <Stack direction="horizontal" gap={1}>
                    <Button
                      onClick={() => {
                        setEditItem(task);
                        setIsOpen(true);
                      }}
                      className="d-grid place-items-center"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteTask(task.id))}
                      className="d-grid place-items-center"
                      variant="danger"
                    >
                      <FaTrashCan />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <FormModal
          editItem={editItem}
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
            setEditItem(null);
          }}
        />
      </Container>
    </div>
  );
};

export default Crud;
