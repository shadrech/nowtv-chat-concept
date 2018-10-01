import styled, {css} from "react-emotion"

export const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignment === "right" ? "flex-end" : "flex-start"};
  margin: 1.25rem 0;
  font-family: sans-serif;
  position: relative;
`;

export const TextWrapper = styled.div`
  background: ${props => props.alignment === "right" ? "#EE5C26" : "white"};
  color: ${props => props.alignment === "right" ? "white" : "#2E3D69"};
  padding: 1rem;
  border-radius: 0.2rem;
  position: relative;
  order: ${props => props.alignment === "right" ? 1 : 2};
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 0;
    width: 0;
    border-bottom: 1rem solid ${props => props.alignment === "right" ? "#EE5C26" : "white"};
    ${props => props.alignment === "right" ? css`
      right: -0.9rem;
      border-right: 1rem solid transparent;
    ` : css`
      left: -0.9rem;
      border-left: 1.5rem solid transparent;
    `}
    
  }
`;

export const EmailWrapper = styled.figure`
  position: absolute;
  background: #1F2B49;
  padding: 0.5rem;
  display: flex;
  font-size: 0.75rem;
  color: white;
  border-radius: 0.2rem;
  top: -0.5rem;
`;

export const AvatarWrapper = styled.div`
  order: ${props => props.alignment === "right" ? 2 : 1};
  ${props => props.alignment === "right" ? css`
    margin-left: 1rem;
  `: css`
    margin-right: 1rem;
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: flex-end;
`;

export const Time = styled.span`
  font-size: 0.7rem;
  position: absolute;
  bottom: -1.2rem;
  width: 7rem;
`;

export const Avatar = styled.div`
  background-image: url(${props => props.avatar});
  background-position: center;
  background-size: contain;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
`;