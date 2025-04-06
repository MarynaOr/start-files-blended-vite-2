import { RiDeleteBinLine} from 'react-icons/ri';
// , RiEdit2Line 
// Компонент має приймати як пропс об'єкт
// однієї тудушки і формувати наступну
// структуру:

import Text from '../Text/Text';
import s from './TodoListItem.module.css';

const TodoListItem = ({ todo, index, deleteTodo }) => {
  
  return (
    <div className={s.box}>
      {/* <Text>{todo.id}</Text> */}
      <Text> {index + 1} {todo.text} </Text>
      <button onClick={()=>deleteTodo(todo.id)} className={s.deleteButton}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
