import React from "react";

import { MemberWrapper } from "./styles";
import { Avatar, MemberDetails, Name, Text } from "./styles";

const getMessageStr = count => {
  if (count === 0) return "No messages";
  if (count === 1) return "1 message";
  return `${count} messages`;
}

const Member = ({member, makeActiveMember, activeMember}) => (
  <MemberWrapper className="member_component" onClick={() => makeActiveMember(member)} active={activeMember && activeMember.id === member.id}>
    <Avatar avatar={member.avatar} />
    <MemberDetails>
      <Name>{`${member.firstName} ${member.lastName}`}</Name>
      <Text>{getMessageStr(member.messageCount)}</Text>
    </MemberDetails>
  </MemberWrapper>
)

export default Member;