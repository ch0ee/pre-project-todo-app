import React, { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import Todos from './components/Todos';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showAddNewTodoHandler = (value) => {
    setIsVisible(value);
  };

  const saveTodoDataHandler = (newTodoData) => {
    fetch(`http://localhost:3001/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodoData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('성공: ', data);
      })
      .catch((error) => {
        console.error('실패: ', error);
      });
    console.log('created!');
    window.location.reload();
  };

  return (
    <div className="app">
      <Header onShowAddNewTodo={showAddNewTodoHandler} isVisible={isVisible} />
      <CreateTodo onSaveTodoData={saveTodoDataHandler} isVisible={isVisible} />
      <Todos />
    </div>
  );
};

export default App;
