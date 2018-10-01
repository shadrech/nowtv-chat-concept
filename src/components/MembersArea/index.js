import React from "react";

import { MembersWrapper, TopSection, Avatar, NameHeading, DetailsHeading, MiddleSection, BottomSection } from "./styles";
import Member from "../../widgets/Member";

const MembersArea = ({members, activeMember, makeActiveMember, clearActiveMember}) => (
  <MembersWrapper>
    {activeMember && 
      <TopSection>
        <Avatar avatar={activeMember.avatar} />
        <NameHeading>{`${activeMember.firstName} ${activeMember.lastName}`}</NameHeading>
        <DetailsHeading>{activeMember.email}</DetailsHeading>
        <DetailsHeading>{activeMember.ip}</DetailsHeading>
      </TopSection>
    }
    <MiddleSection activeMember={activeMember}>
      {members.map(m => <Member
                          key={m.id}
                          member={m}
                          makeActiveMember={makeActiveMember}
                          activeMember={activeMember}
                        />)}
    </MiddleSection>
    <BottomSection>
      <DetailsHeading className="show_all" onClick={clearActiveMember}>Show All Messages</DetailsHeading>
    </BottomSection>
  </MembersWrapper>
);

export default MembersArea;
