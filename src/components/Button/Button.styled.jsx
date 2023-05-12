import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: inline;
  text-align: center;
  margin: 0 auto;
  padding: 8px 16px;
  color: #fff;
  text-transform: uppercase;
  background-color: black;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, &:focus {
    background-color: #ff6b01;
    box-shadow: 0 8px 43px #ff6b0199;
  }
`;
