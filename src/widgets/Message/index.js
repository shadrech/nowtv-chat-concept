import React from "react";
import PropType from "prop-types";
import moment from "moment";

import { MessageWrapper, TextWrapper, AvatarWrapper, Avatar, Time, EmailWrapper } from "./styles";

const formats = {
  sameDay: '[Today at] H:mm',
  nextDay: '[Tomorrow at ] H:mm',
  lastDay: '[Yesterday at ] H:mm',
  sameElse: 'DD/MM/YYYY [at] H:mm'
};

const Message = ({message: {message, avatar, timestamp, email}, alignment}) => (
  <MessageWrapper alignment={alignment}>
    <TextWrapper alignment={alignment}>{message}</TextWrapper>
    <AvatarWrapper alignment={alignment}>
      <Avatar avatar={avatar} />
      <Time>{moment(timestamp).calendar(null, formats)}</Time>
      <EmailWrapper>{email}</EmailWrapper>
    </AvatarWrapper>
  </MessageWrapper>
);

Message.propTypes = {
  message: PropType.object,
  alignment: PropType.oneOf(["right", "left"])
};

export default Message;
