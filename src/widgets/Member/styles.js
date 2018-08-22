import styled, { css } from "react-emotion";
import { Avatar as StandardAvatar } from "../Message/styles";

export const MemberWrapper = styled('div')`
  color: #000;
  margin: 1rem 0;
  background: white;
  border-radius: 0.2rem;
  padding: 0.5rem;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const Avatar = styled(StandardAvatar)`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.75rem;
`;

export const MemberDetails = styled('div')`
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const Name = styled('p')`
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Helvetica, sans-serif, Arial;
  margin: 0.5rem 0;
`;

export const Text = styled(Name)`
  font-size: 0.75rem;
  font-weight: lighter;
`;