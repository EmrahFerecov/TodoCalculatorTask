import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './TodoSlice';

const Todos = () => {
  const { todos } = useSelector((state) => state.todos); 
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(inputVal));
    setInputVal('');
  };

  return (
    <>
      <input type="text" value={inputVal} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
    
       <ul>
       {todos.map((todo) => (
        <>
    <li key={todo.id}>{todo.text}</li>
  
    </>
  ))}
        
       </ul>
      
    </>
  );
};

export default Todos;