import React, {Component} from "react";

import { BodyWrapper, ChatLogWrapper } from "./styles";
import Message from "../../widgets/Message";

class AppBody extends Component {
  render() {
    const {messages, loading, error} = this.props;

    return (
      <BodyWrapper>
        <ChatLogWrapper>
          {messages.map((m, i) => <Message message={m} alignment={i%2 === 0 ? "right" : "left"} key={m.messageId} />)}
        </ChatLogWrapper>
      </BodyWrapper>
    );
  }
}

export default AppBody;