import styled from "react-emotion";

export const BodyWrapper = styled('div')`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 6.7rem);
`;

export const ChatLogWrapper = styled('div')`
  flex-grow: 2;
  background: #e5ecef;
  padding: 4rem 5rem;
  overflow-y: scroll;
`;