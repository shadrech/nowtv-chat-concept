import React from "react";

import { MemberWrapper } from "./styles";
import { Avatar, MemberDetails, Name, Text } from "./styles";

const Member = ({member, makeActiveMember}) => (
  <MemberWrapper onClick={() => makeActiveMember(member)}>
    <Avatar avatar={member.avatar} />
    <MemberDetails>
      <Name>{`${member.firstName} ${member.lastName}`}</Name>
      <Text>{`5 total messages`}</Text>
    </MemberDetails>
  </MemberWrapper>
)

export default Member;