import React, {Component} from "react";

import { SubHeaderWrapper, SubMenuItem } from "./styles";
import { ItemText } from "../Header/styles";
import { Chevron } from "../../assets/icons";

class Header extends Component {
  render() {
    return (
      <SubHeaderWrapper>
        <SubMenuItem>
          <ItemText>About NOW TV</ItemText>
          <Chevron />
        </SubMenuItem>
        <SubMenuItem>
          <ItemText>What's on</ItemText>
        </SubMenuItem>
        <SubMenuItem>
          <ItemText>TV Passes</ItemText>
          <Chevron />
        </SubMenuItem>
        <SubMenuItem active>
          <ItemText>Chat Log</ItemText>
        </SubMenuItem>
        <SubMenuItem>
          <ItemText>NOW TV Stick</ItemText>
        </SubMenuItem>
        <SubMenuItem>
          <ItemText>Get NOW TV</ItemText>
          <Chevron />
        </SubMenuItem>
      </SubHeaderWrapper>
    )
  }
}

export default Header;