import React from "react";

import { MemberWrapper } from "./styles";
import { Avatar, MemberDetails, Name, Text } from "./styles";

const Member = ({member: {avatar, lastName, firstName}}) => (
  <MemberWrapper>
    <Avatar avatar={avatar} />
    <MemberDetails>
      <Name>{`${firstName} ${lastName}`}</Name>
      <Text>{`5 total messages`}</Text>
    </MemberDetails>
  </MemberWrapper>
)

export default Member;