import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as S from './styles';

function DocumentPage() {
  return (
    <S.Container>
      <h1>hello world Document page</h1>
      <Link to='/'>back to home</Link>
    </S.Container>
  )
}

export { DocumentPage};