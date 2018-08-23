import React from "react";

import { MemberWrapper } from "./styles";
import { Avatar, MemberDetails, Name, Text } from "./styles";

const Member = ({member, makeActiveMember, activeMember}) => (
  <MemberWrapper onClick={() => makeActiveMember(member)} active={activeMember && activeMember.id === member.id}>
    <Avatar avatar={member.avatar} />
    <MemberDetails>
      <Name>{`${member.firstName} ${member.lastName}`}</Name>
      <Text>{`5 total messages`}</Text>
    </MemberDetails>
  </MemberWrapper>
)

export default Member;