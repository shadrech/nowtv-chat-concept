import React, {Component} from "react";
import PropType from "prop-types";
import moment from "moment";

import { MessageWrapper, TextWrapper, AvatarWrapper, Avatar, Time, EmailWrapper } from "./styles";

const formats = {
  sameDay: '[Today at] H:mm',
  nextDay: '[Tomorrow at ] H:mm',
  lastDay: '[Yesterday at ] H:mm',
  sameElse: 'DD/MM/YYYY [at] H:mm'
};

class Message extends Component {
  state = {
    showEmail: false
  }

  toggleShowEmail = () => {
    this.setState({showEmail: !this.state.showEmail});
  }

  render() {
    const {message: {message, avatar, timestamp, email}, alignment} = this.props;
    return (
      <MessageWrapper className="message_component" alignment={alignment}>
        <TextWrapper alignment={alignment}>{message}</TextWrapper>
        <AvatarWrapper alignment={alignment} onMouseEnter={this.toggleShowEmail} onMouseLeave={this.toggleShowEmail}>
          <Avatar avatar={avatar} />
          <Time>{moment(timestamp).calendar(null, formats)}</Time>
          {this.state.showEmail && <EmailWrapper>{email}</EmailWrapper>}
        </AvatarWrapper>
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  message: PropType.object,
  alignment: PropType.oneOf(["right", "left"])
};

export default Message;
