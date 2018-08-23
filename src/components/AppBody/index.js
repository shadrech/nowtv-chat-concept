import React, {Component} from "react";

import { BodyWrapper, ChatLogWrapper } from "./styles";
import MembersArea from "../MembersArea";
import Message from "../../widgets/Message";

class AppBody extends Component {
  render() {
    const {messages, members, activeMember, ...rest /*loading, error*/} = this.props;
    const mssgs = activeMember ? messages.filter(m => m.userId === activeMember.id) : messages;

    return (
      <BodyWrapper>
        <ChatLogWrapper>
          {mssgs.map((m, i) => <Message message={m} alignment={activeMember || i%2 === 0 ? "right" : "left"} key={m.messageId} />)}
        </ChatLogWrapper>
        <MembersArea members={members} activeMember={activeMember} {...rest} />
      </BodyWrapper>    
    );
  }
}

export default AppBody;