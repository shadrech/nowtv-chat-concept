import React from "react";

import getChatLog from './service';

class Container extends React.Component {
  state = {
    messages: [],
    members: [],
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
  
  render = () => this.props.children({...this.state});
}

export default Container;