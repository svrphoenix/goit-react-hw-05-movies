import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Form = styled.form`
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: transparent;

  font: inherit;
  font-size: 18px;
  border-style: none;
  
  outline: none;
  padding: 0 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Icon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
`;
