import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* width: 100%; */
  padding: 1vh 5vw 0 5vw  ;
  height: 100%;
  /* background-color: darksalmon; */
  height: 100vh;

`;

export const WrapperTitle = styled.div`
  background-color: #0ea5e9;
  margin: 2vh 0;
  margin-bottom: 5rem;
  padding: 2rem;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: #f8fafc;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: calc(2.4rem + 10px);
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #ddd;
  border:none;
  border-radius: 5px;
  /* position: absolute; */
  bottom: 0;
  margin-top:5vh;

`;