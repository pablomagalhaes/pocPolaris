import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const LogBookPage = () => {
  return (
    <S.Container>
      <h1>Log book</h1>
      <Link to='/signup'>go to signup Page</Link>
    </S.Container>
  );
}

export { LogBookPage};
