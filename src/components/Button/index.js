import React from 'react';
import * as S from './styles';

const Button = ({children,onClick,cancelButton=false}) => {
  return (
    <S.Container onClick={onClick} cancelButton={cancelButton}>
      {children}
    </S.Container>
  );
}

export { Button };
