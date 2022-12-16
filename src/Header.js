import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div`
  padding: 0 1.6rem;
  background-color: rgb(255, 255, 255);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 2.2rem;
    flex: 2 0 0;
  }

  img {
    max-width: max-content;
  }

  button {
    flex: 1 0 0;
    background: none;
    border: none;
    max-width: max-content;
  }
  button img {
    transform: scale(0.75);
    transition: all 0.3s ease-in;
  }
  button:hover img {
    transform: scale(0.85);
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 767px) {
    padding: 0 1rem;
    margin: 1.4rem auto;
    gap: 0.2rem;

    h1 {
      font-size: 1.5rem;
      gap: 0.6rem;
    }

    img {
      max-width: 36px;
    }

    button img {
      transform: none;
    }
    button:hover img {
      transform: none;
    }
  }
`;

const Header = ({ onShowAddNewTodo, isVisible }) => {
  const addBtnClickHandler = () => {
    onShowAddNewTodo(!isVisible);
  };
  const menuBtnClickHandler = () => {
    alert('더 많은 기능을 준비중입니다.');
  };

  return (
    <HeaderSection>
      <h1>
        <img src='images/header-icon.png' alt='logo' />
        오늘의 할 일
      </h1>
      <button onClick={addBtnClickHandler}>
        {/* 오늘의할일 일때 */}
        {isVisible ? (
          <img
            src='images/close.png'
            title='할일 추가 닫기'
            alt='닫기 아이콘'
          />
        ) : (
          <img
            src='images/add.png'
            title='할일 추가 열기'
            alt='더하기 아이콘'
          />
        )}
        {/* 어제의한일일 때 - 달력보기 */}
        {/* 달력,앱정보일때 버튼 없음 */}
      </button>
      <button onClick={menuBtnClickHandler}>
        <img src='images/menu.png' title='메뉴 더 보기' alt='메뉴 아이콘' />
      </button>
    </HeaderSection>
  );
};

export default Header;
