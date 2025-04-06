// import Text from '../components/Text/Text';
// import { useState } from "react";

import { useState } from "react";
import FormComponent from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";

const Todos = () => {
  // const [inpValue, setInpValue] = useState('')
  const [todos, setTodos] = useState([{id:'', text:''}])

const handleAddTodo = (newText) =>{
  if(!newText){return}

  const addNewTodo = {
    id: crypto.randomUUID(),
    text: newText,
  }
    setTodos((prev)=>[...prev, addNewTodo])
  
}
  return (
    <>
  <FormComponent onSubmit={handleAddTodo}/>
  <TodoList todos={todos} />
    </>
  );
};

export default Todos;
