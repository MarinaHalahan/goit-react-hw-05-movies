import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
  box-shadow: 0 15px 16px -16px rgba(0, 0, 0, 0.6);
`;

export const StyledLink = styled(NavLink)`
  color: black;

  cursor: pointer;

  &.active {
    color: ${props => (props.movies ? 'pink' : 'black')};
  }
`;
export const NavBtn = styled.span`
  margin-right: 15px;
  font-size: 20px;
  font-weight: 700;
`;
