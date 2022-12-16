import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 4px;
  display: flex;
  background-color: ${(props) => (props.isComplete ? '#d4e2e3' : '#fee6e2')};
  margin: 1rem auto;
  padding: 1rem 1.6rem;
  justify-content: space-between;
  gap: 1.6rem;

  h2 {
    flex: 2 0 0;
  }

  button {
    flex: 1 0 0;
    background: none;
    border: none;
    max-width: max-content;
  }
  button img {
    transform: scale(0.9);
    transition: all 0.3s ease-in;
  }
  button:hover img {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
    gap: 0.2rem;
    font-size: 0.8rem;

    button img {
      max-width: 24px;
      transform: none;
    }
    button:hover img {
      transform: none;
    }
  }
`;

const TodoItem = ({ id, content, isComplete }) => {
  const isCompleteClickHandler = () => {
    let updateData = { id, content, isComplete: !isComplete };
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log('성공: ', data);
      })
      .catch((error) => console.error('실패: ', error));
  };

  const deleteClickHandler = () => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log('delete!');
    window.location.reload();
  };

  return (
    <Card isComplete={isComplete}>
      <h2>{content}</h2>
      <button onClick={isCompleteClickHandler}>
        {!isComplete ? (
          <img src='images/done.png' title='완료하기' alt='체크 아이콘' />
        ) : (
          <img src='images/undo.png' title='되돌리기' alt='히스토리 아이콘' />
        )}
      </button>
      <button onClick={deleteClickHandler}>
        <img src='images/delete.png' title='삭제하기' alt='삭제 아이콘' />
      </button>
    </Card>
  );
};

export default TodoItem;
