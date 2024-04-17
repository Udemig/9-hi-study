import { useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';

const initialState = {
  isDarkMode: true,
  todos: [],
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    // sayfayı yenilemeyi engelle
    e.preventDefault();

    // inputtaki yazıya erişme
    const text = e.target[0].value;

    // yeni bir elemanın oluşturulucağına reducer'a haber ver
    dispatch({ type: 'CREATE', payload: text });
  };

  return (
    <div
      className={`vh-100 vw-100 ${
        state.isDarkMode ? 'bg-dark text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container p-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-center">TODO LIST</h2>
          <button onClick={() => dispatch({ type: 'CHANGE_THEME' })}>
            Mod Değiş
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="d-flex gap-3 align-items-center my-5"
        >
          <input className="form-control shadow" type="text" />
          <button className="btn btn-success shadow">Gönder</button>
        </form>

        <ul className="list-group">
          {state.todos.map((todo) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}
              >
                sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
