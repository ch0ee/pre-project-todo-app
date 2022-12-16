import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 4px;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  background-color: #ededed;

  @media screen and (max-width: 767px) {
    padding: 0.6rem 0;
    font-size: 1.2rem;
  }
`;

const DateIndicator = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  let todayDay = '';
  switch (today.getDay()) {
    case 0:
      todayDay = '일요일';
      break;
    case 1:
      todayDay = '월요일';
      break;
    case 2:
      todayDay = '화요일';
      break;
    case 3:
      todayDay = '수요일';
      break;
    case 4:
      todayDay = '목요일';
      break;
    case 5:
      todayDay = '금요일';
      break;
    case 6:
      todayDay = '토요일';
      break;
  }

  return (
    <Card className='date-indicator'>
      {todayMonth}월 {todayDate}일 {todayDay}
    </Card>
  );
};

export default DateIndicator;
