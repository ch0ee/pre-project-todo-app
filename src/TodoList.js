import React from 'react';
import TodoItem from './TodoItem';
import Empty from './Empty';

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {/* todos의 길이가 0이면 empty, 1이상이면 todos.map todoitem */}
      {todos.length === 0 ? (
        <Empty />
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isComplete={todo.isComplete}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
