import React from "react";

import getChatLog from './service';

class Container extends React.Component {
  state = {
    messages: [],
    loading: true,
    error: null
  }

  async componentDidMount() {
    const {state} = this;
    try {
      getChatLog()
      .then((messages) => {
        this.setState({
          error: null,
          messages,
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