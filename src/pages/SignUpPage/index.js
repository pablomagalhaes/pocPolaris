import React from 'react';
import { useNavigate } from "react-router-dom";
import * as S from './styles';
import {Input} from '../../components/Input';
import { useRef } from 'react';

const SignUpPage = () => {
  const firstNameRef= useRef('');
  const lastNameRef= useRef('');
  const birthDayRef= useRef('');
  const navigate = useNavigate();


  function handleNextPage (){
    
    const formContent = {
      name: firstNameRef.current?.value || '',
      lastName:lastNameRef.current?.value || '',
      birthDay: birthDayRef.current?.value || '',
    }

    if(window?.ReactNativeWebView){
      // sending message to react-native
      window?.ReactNativeWebView?.postMessage(JSON.stringify(formContent))
    }else{
      navigate('/confirmSignup',{ 
        state:{
          formContent
        }
      })
      console.log({formContent})
    }
  }
  return (
    <S.Container>
      <S.WrapperTitle>
        <S.Title>Enter the information for the person who will be wearing the Sensor</S.Title>
      </S.WrapperTitle>
      <Input label='First Name' ref={firstNameRef} type="text" />
      <Input label='Last Name' ref={lastNameRef} type="text" />
      <Input label='Date of Birth' ref={birthDayRef} type="date" />

      <S.Button onClick={handleNextPage}> NEXT </S.Button>

    </S.Container>
  );
}

export { SignUpPage};
