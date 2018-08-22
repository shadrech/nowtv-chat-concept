import styled from "react-emotion";
import {ReactComponent as Icon} from "../../assets/logo.svg";

export const HeaderWrapper = styled('div')`
  width: 100%;
  height: 3.5rem;
  background: #1F2B49;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Logo = styled(Icon)`
  height: 1.5rem;
`;

export const Menu = styled('div')`
  position: absolute;
  right: 1rem;
  height: 100%;
`;

export const MenuItem = styled('div')`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Helvetica;
  height: 100%;
  padding: 0 10px;
  &:hover {
    background: rgba(255,255,255,0.1);
    cursor: pointer;
  }
`;

export const ItemText = styled('p')`
  color: white;
  font-size: 1rem;
`;