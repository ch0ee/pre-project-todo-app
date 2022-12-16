import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem auto;
  text-align: center;

  img {
    max-width: 50%;
    margin: 0 auto;
  }
`;

const Empty = () => {
  return (
    <Card>
      <img src='images/empty.png' alt='청소 이미지' />
      <div>앗, 할 일이 없어요.</div>
    </Card>
  );
};

export default Empty;
