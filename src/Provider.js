import React from "react";

import getChatLog from './service';

class Container extends React.Component {
  state = {
    messages: [],
    members: [],
    activeMember: null,
    loading: true,
    error: null
  }

  async componentDidMount() {
    const {state} = this;
    try {
      getChatLog(true)
      .then(({chatLog, members}) => {
        this.setState({
          error: null,
          messages: chatLog,
          members,
          loading: false
        });
      });
    } catch (error) {
      this.setState({
        ...state,
        error,
        loading: false
      });
    }
  }

  makeActiveMember = member => {
    console.log("SET ACTIVE", member);
    this.setState({activeMember: member});
  }

  clearActiveMember = () => {
    console.log("CLEAR!!!!")
    this.setState({activeMember: null});
  }
  
  render = () => this.props.children({
    ...this.state,
    makeActiveMember: this.makeActiveMember,
    clearActiveMember: this.clearActiveMember
  });
}

export default Container;