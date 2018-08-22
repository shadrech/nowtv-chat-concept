import React from "react";

import { MembersWrapper, TopSection, Avatar, NameHeading, DetailsHeading, MiddleSection, BottomSection } from "./styles";
import Member from "../../widgets/Member";

const MembersArea = ({members, activeMember}) => (
  <MembersWrapper>
    <TopSection>
      <Avatar avatar={activeMember.avatar} />
      <NameHeading>{`${activeMember.firstName} ${activeMember.lastName}`}</NameHeading>
      <DetailsHeading>{activeMember.email}</DetailsHeading>
      <DetailsHeading>{activeMember.ip}</DetailsHeading>
    </TopSection>
    <MiddleSection>
      {members.map(m => <Member member={m} />)}
    </MiddleSection>
    <BottomSection>
      <DetailsHeading>Clear All</DetailsHeading>
    </BottomSection>
  </MembersWrapper>
);

export default MembersArea;
