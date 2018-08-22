import React, {Component} from "react";

import { BodyWrapper, ChatLogWrapper } from "./styles";
import MembersArea from "../MembersArea";
import Message from "../../widgets/Message";

class AppBody extends Component {
  render() {
    const {messages, members, /*loading, error*/} = this.props;
    const activeMember = {
      avatar:"http://dummyimage.com/100x100.jpg/cc0000/ffffff",
      email:"jrogers5@chron.com",
      firstName:"James",
      id:"21f4beef-251c-4a9e-aace-20e68abb27e8",
      ip:"138.157.70.61",
      lastName:"Rogers"
    };

    return (
      <BodyWrapper>
        <ChatLogWrapper>
          {messages.map((m, i) => <Message message={m} alignment={i%2 === 0 ? "right" : "left"} key={m.messageId} />)}
        </ChatLogWrapper>
        <MembersArea members={members} activeMember={activeMember} />
      </BodyWrapper>
    );
  }
}

export default AppBody;