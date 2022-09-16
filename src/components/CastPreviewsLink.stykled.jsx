import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CastPreviewsLink = styled(NavLink)`
  padding: 20px;
  font-weight: bold;
  &.active {
    color: orange;
  }
`;
