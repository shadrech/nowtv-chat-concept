import styled from "react-emotion";

export const MembersWrapper = styled('div')`
  background: #eff3f5;
  width: 20rem;
`;

export const TopSection = styled('div')`
  position: relative;
  padding: 1rem 0;
  box-sizing: border-box;
  height: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:after {
    content: "";
    height: 1px;
    width: 70%;
    position: absolute;
    left: 15%;
    bottom: 0;
    background: #283765;
  }
`;

export const Avatar = styled('div')`
  background-image: url(${props => props.avatar});
  background-size: contain;
  width: 5rem;
  height: 5rem;
`;

export const NameHeading = styled('p')`
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: #2E3D69;
  margin: 0.1rem 0;
`;

export const DetailsHeading = styled(NameHeading)`
  font-weight: normal;
  font-size: 0.8rem;
`;

export const MiddleSection = styled('div')`
  height: calc(100% - ${props => props.activeMember ? "15rem" : "3rem"});
  overflow-y: scroll;
  padding: 1rem;
  box-sizing: border-box;
`;

export const BottomSection = styled('div')`
  position: relative;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    height: 1px;
    width: 70%;
    position: absolute;
    left: 15%;
    top: 0;
    background: #283765;
  }
  p {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;