import styled from "react-emotion";

export const BodyWrapper = styled('div')`
  background: red;
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100vh - 6.7rem);
`;

export const ChatLogWrapper = styled('div')`
  flex-grow: 3;
  background: #e5ecef;
  padding: 4rem 5rem;
  overflow-y: scroll;
`;