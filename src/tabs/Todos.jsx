// import Text from '../components/Text/Text';
// import { useState } from "react";

import { useState } from "react";
import FormComponent from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";

const Todos = () => {
  const [inpValue, setInpValue] = useState('')
  const todos = [
    { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
  ]



const onSubmit = (value) =>{
  setInpValue(value)
console.log(value);

}
  return (
    <>
  <FormComponent onSubmit={onSubmit}/>
  <TodoList todos={todos} />
      {/* <Text textAlign="center">There are no any todos ...</Text> */}
    </>
  );
};

export default Todos;
