import styled from 'styled-components';

export const WrapperContent = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  width: 50%;

  &>a{
    font-size: 4rem;
  }
`;

export const WrapperCounterStep = styled.div`
  display: flex;
  margin: 1vh 0;

`;

export const PdfIframe = styled.object`
  width: 100%;
  height: 40vh;
  border:0; 
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction:column;
  /* justify-content: space-around; */

`;