import React, { useState } from 'react';
import { forwardRef } from 'react';

import * as S from './styles';

// function Input({label=''}) 


const Input = forwardRef(({label,...rest}, ref)=>{
  const [isFocused,setIsFocused] = useState(false);
  return(
    <S.Container onClick={()=>ref.current?.focus()}>
      <S.Label isFocused={isFocused}>{label}</S.Label>
      <S.Input ref={ref} isFocused={isFocused} {...rest} onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} />
    </S.Container>

  )
})
export { Input};