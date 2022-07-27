import React, { useId, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/context/auth';
import * as S from './styles';

const SignInPages = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const mockModeId = useId();
  const {handleSignIn,isMockMode,setIsMockMode} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    try{
      handleSignIn({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      })
      navigate('/')
    }catch(e){
      alert('error in login')
      console.log('error in login: ',e)
    }
  }
  return (
    <S.Container>
      <Input label='email' ref={emailRef} type="text" />
      <Input label='password' ref={passRef} type="password"  />
      <Button onClick={handleSubmit}>submit</Button>
      
      <S.WrapperMockMode>
        <input type="checkbox" id={mockModeId} name={mockModeId} onChange={()=>setIsMockMode(oldState=>!oldState)} checked={isMockMode}/>
        <label htmlFor={mockModeId}>mockMode</label>
      </S.WrapperMockMode>
    
    </S.Container>
  );
}

export { SignInPages };
