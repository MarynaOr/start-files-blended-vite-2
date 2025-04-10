// import Text from '../components/Text/Text';
// import { useState } from "react";

import { useEffect, useState } from 'react';
import FormComponent from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  // const [inpValue, setInpValue] = useState('')
  const [todos, setTodos] = useState(() => {
    const saveTodo = JSON.parse(localStorage.getItem('todos'))
    return saveTodo ? saveTodo : []
  });

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleAddTodo = newText => {
    if (!newText) {
      return;
    }

    const addNewTodo = {
      id: crypto.randomUUID(),
      text: newText,
    };
    setTodos(prev => [...prev, addNewTodo]);
  };

    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((item)=> item.id !== id))
    }
  return (
    <>
      <FormComponent onSubmit={handleAddTodo} />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </>
  );
};

export default Todos;
