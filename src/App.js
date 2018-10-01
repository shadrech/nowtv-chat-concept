import React from 'react';
import {Provider} from "react-redux";
import styled from 'react-emotion';

import ChatLogContainer from "./containers/ChatLogContainer";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import store from "./store";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const App = () => (
  <Provider store={store}>
      <AppWrapper>
        <Header />
        <SubHeader />

        {/* List all containers maybe using react-router routes or something of the like */}
        <ChatLogContainer />
      </AppWrapper>
  </Provider>
);

export default App;
