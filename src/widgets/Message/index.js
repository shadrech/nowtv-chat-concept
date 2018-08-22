import React from "react";
import PropType from "prop-types";
import moment from "moment";

import { MessageWrapper, TextWrapper, AvatarWrapper, Avatar, Time } from "./styles";

const formats = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow at ] H:mm',
  lastDay: '[Yesterday at ] H:mm',
  sameElse: 'DD/MM/YYYY [at] H:mm'
};

const Message = ({message: {message, avatar, timestamp, email}, alignment}) => (
  <MessageWrapper alignment={alignment}>
    <TextWrapper alignment={alignment}>{message}</TextWrapper>
    <AvatarWrapper alignment={alignment} email={email}>
      <Avatar avatar={avatar} />
      <Time>{moment(timestamp).calendar(null, formats)}</Time>
    </AvatarWrapper>
  </MessageWrapper>
);

Message.propTypes = {
  message: PropType.objectOf({
    messageId: PropType.string,
    userId: PropType.string,
    fullName: PropType.string,
    timestamp: PropType.string,
    email: PropType.string,
    message: PropType.string,
    avatar: PropType.string,
  }),
  alignment: PropType.oneOf(["right", "left"])
};

export default Message;
