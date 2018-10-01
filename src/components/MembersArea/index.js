import React from "react";
import PropTypes from "prop-types";

import { MembersWrapper, TopSection, Avatar, NameHeading, DetailsHeading, MiddleSection, BottomSection } from "./styles";
import Member from "../../widgets/Member";

const MembersArea = ({members, activeMember, makeActiveMember, clearActiveMember}) => (
  <MembersWrapper>
    {activeMember && 
      <TopSection className="member_details">
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

MembersArea.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeMember: PropTypes.object,
  makeActiveMember: PropTypes.func.isRequired,
  clearActiveMember: PropTypes.func.isRequired,
}

export default MembersArea;
