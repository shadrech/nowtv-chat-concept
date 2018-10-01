import React, {Component} from "react";
import PropTypes from "prop-types";

import { BodyWrapper, ChatLogWrapper } from "./styles";
import MembersArea from "../MembersArea";
import Message from "../../widgets/Message";

class AppBody extends Component {
  alignment = "right";

  componentDidMount() {
    this.props.fetchData();
  }

  calcAlignment = i => {
    const {messages} = this.props;

    const prev = i - 1;
    if (prev >= 0) {
      if (messages[prev].userId !== messages[i].userId)
        this.alignment = this.alignment === "right" ? "left" : "right";
    }

    return this.alignment;
  }

  render() {
    const {messages, members, activeMember, ...rest /*loading, error*/} = this.props;
    const mssgs = activeMember ? messages.filter(m => m.userId === activeMember.id) : messages;
    return (
      <BodyWrapper>
        <ChatLogWrapper>
          {mssgs.map((m, i) => <Message
                                  message={m}
                                  alignment={activeMember ? "right" : this.calcAlignment(i)}
                                  key={m.messageId} />)}
        </ChatLogWrapper>
        <MembersArea members={members} activeMember={activeMember} {...rest} />
      </BodyWrapper>    
    );
  }
}

AppBody.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeMember: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  makeActiveMember: PropTypes.func.isRequired,
  clearActiveMember: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
}

export default AppBody;