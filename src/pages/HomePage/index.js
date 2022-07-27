import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/context/auth';
import * as S from './styles';

const HomePage = () => {
  const {user} = useAuth();

  return (
    <S.Container>
      <h1>home page</h1>
      <pre>{JSON.stringify(user,null,1)}</pre>
      <Link to='/signin'>signIn</Link>
    </S.Container>
  );
}

export { HomePage };
