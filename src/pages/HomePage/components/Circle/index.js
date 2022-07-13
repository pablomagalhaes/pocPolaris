import React from 'react';
import * as S from './styles';

const Circle = ({number}) => {
  return (
    <S.Container>
      <S.Title>{number}</S.Title>
    </S.Container>
  );
}

export { Circle};
