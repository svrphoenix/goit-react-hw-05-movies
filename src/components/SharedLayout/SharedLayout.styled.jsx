import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: black;
`;

export const List = styled.ul`
  padding: 32px;
  margin-left: auto;
  gap: 40px;
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  position: relative;

  &.active::after {
    color: orange;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #ff001b;
    border-radius: 2px;
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
  }
`;
