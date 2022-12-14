import React from "react";
import {
  Routes as RoutesV6,
  Route,
  useLocation
} from "react-router-dom";
import {animated,useTransition} from 'react-spring';

import styled from 'styled-components';



import {DocumentPage} from "../pages/DocumentPage";

import { HomePage } from "../pages/HomePage";
import { SignUpPage } from "../pages/SignUpPage";
import { SignInPages } from "../pages/SignInPage";
import { ConfirmSignUpScreen } from "../pages/ConfirmSignUpScreen";
import { LogBookPage } from "../pages/LogBookPage";

export const Container = styled(animated.div)`

`;

export function Routes() {
  const location = useLocation();
  const transitions = useTransition(location,{
    from:{
      opacity:0,
      // position:'absolute',
      transform:'translateX(100vw)'
    },
    enter:{
      opacity:1,
      // position:'absolute',
      transform:'translateX(0)'
    },
    leave:{
      opacity:0,
      // position:'absolute',
      transform:'translateX(100vw)'
    }
  })
  return transitions ((props,item)=>(
    <Container style={{...props}}>
      <RoutesV6 location={item}>
        <Route path="/" element={<HomePage />} />
        <Route path="/document" element={<DocumentPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPages />} />
        <Route path="/confirmSignup" element={<ConfirmSignUpScreen />} />
        <Route path="/logbook" element={<LogBookPage />} />
      </RoutesV6>
    </Container>
  )
  );
}
