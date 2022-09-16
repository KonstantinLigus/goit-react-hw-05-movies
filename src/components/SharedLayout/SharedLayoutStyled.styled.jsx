import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  padding: 20px;
  box-shadow: 3px 2px 5px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  &:not(:first-child) {
    margin-left: 10px;
  }
  &.active {
    color: orange;
  }
`;
