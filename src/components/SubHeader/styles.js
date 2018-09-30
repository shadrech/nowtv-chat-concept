import styled from "react-emotion";

import { MenuItem } from "../Header/styles";

export const SubHeaderWrapper = styled.div`
  height: 3.2rem;
  padding: 0 15rem;
  background: #283765;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const SubMenuItem = styled(MenuItem)`
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.4rem;
    opacity: ${props => props.active ? 1 : 0};
  }
  &:nth-child(1) {
    &:after {
      background: #e72f8d;
    }
  }
  &:nth-child(2) {
    &:after {
      background: #653796;
    }
  }
  &:nth-child(3) {
    &:after {
      background: #4fade7;
    }
  }
  &:nth-child(4) {
    &:after {
      background: #37ac47;
    }
  }
  &:nth-child(5) {
    &:after {
      background: #5926c0;
    }
  }
  &:nth-child(6) {
    &:after {
      background: #cc091c;
    }
  }

  &:hover {
    background: none;
    &:after {
      opacity: 1;
    }
  }

  p {
    letter-spacing: 0.05rem;
    font-size: 0.9rem;
  }
`;