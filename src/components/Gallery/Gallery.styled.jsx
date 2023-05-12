import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: rgb(255, 0, 27);
`;

export const StyledLink = styled(Link)`
  color: black;
  &:focus,
  &:hover {
    color: #ff6b01;
  }
`;
