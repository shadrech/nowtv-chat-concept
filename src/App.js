import React, { Component } from 'react';
import styled from 'react-emotion';

import Provider from "./Provider";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import AppBody from "./components/AppBody";

const AppWrapper = styled('div')`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

class App extends Component {
  render() {
    return (
      <Provider>
        {state => (
          <AppWrapper>
            <Header />
            <SubHeader />
            <AppBody {...state} />
          </AppWrapper>
        )}
      </Provider>
    );
  }
}

export default App;
