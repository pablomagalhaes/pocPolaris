import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: clamp(1.7rem,3.5vw,2rem);
  font-weight: 900;
  color: #888;
  
  margin-bottom: .3rem;

  ${({isFocused})=> isFocused && css`
    color: #2563eb;
    border-color: #2563eb;
  `}

`;

export const Input = styled.input`
  font-size: clamp(1.5rem,3.5vw,2rem);
  font-weight: 700;
  color: #1c1917;

  border: none;
  border-bottom: 1px solid #999;
  background-color: transparent;

  ${({isFocused})=> isFocused && css`
    border-color: #2563eb;
  `}

`;