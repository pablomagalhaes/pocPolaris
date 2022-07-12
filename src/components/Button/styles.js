import styled, { css } from 'styled-components';

export const Container = styled.a`
  padding: 1rem 2rem;
  background-color: #1d4ed8;
  color:white;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  margin-top: 1vh;
  color: #171717;
  color:white;
  text-align: center;
  text-transform: capitalize;

  @media (max-width: 768px) { 
    padding: .4rem 1.5rem;
    font-size: 1.2rem;
  }

  ${({cancelButton})=>cancelButton && css`
    background-color: #dc2626;
    margin-top: 0.5vh;
  `}
  &:hover{
    transform: scale(1.01);
  }
`;
