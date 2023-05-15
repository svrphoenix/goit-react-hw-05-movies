import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: black;
  border: 1px solid white;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.ul`
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
  &:focus,
  &:hover {
    box-shadow: 0 8px 48px #ff001b;
  }

  &.active::after {
    display: block;
    position: absolute;
    color: orange;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #ff001b;
    border-radius: 2px;
    top: 100%;
    left: 0;
  }
`;
