import { useSelector } from 'react-redux';
import Card from './Card';

const ListTodos = () => {
  // store'daki veirlere abone olma. useSelector'e bir fonksiyon veririz ve bu fonksiyon parametre olarak bütün store'daki state'i alır ve bir değer döndürmek zorundadır. eğerki doğrudan store'u döndürürsek storedeki bütün reducerlara abone olmuş oluruz buda gereksiz renderlara sebep olur. Bu yüzden store'un içerisindeki verilerine ihtiyaç duyduğumuz reducer'ı return etmeliyiz
  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
