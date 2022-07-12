import React from 'react';
import * as S from './styles';

const Button = ({children,cancelButton=false}) => {
  return (
    <S.Container onClick={()=>alert('asd')} cancelButton={cancelButton}>
      {children}
    </S.Container>
  );
}

export { Button };
