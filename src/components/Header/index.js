import React, {Component} from "react";

import { HeaderWrapper, Logo, Menu, MenuItem, ItemText } from "./styles";
import { Chevron } from "../../components/icons";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Menu>
          <MenuItem>
            <ItemText>My Account</ItemText>
            <Chevron />
          </MenuItem>
        </Menu>
      </HeaderWrapper>
    )
  }
}

export default Header;