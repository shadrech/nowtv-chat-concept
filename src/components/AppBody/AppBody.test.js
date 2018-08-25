import React from "react";
import {shallow} from "enzyme";

import AppBody from "./";
import { dummyStateData } from "../../utils/testing";

describe("<AppBody />", () => {
  const {messages, members} = dummyStateData;
  test("should render as expected", async () => {
    const appBody = shallow(<AppBody messages={messages} members={members} />);
    expect(appBody).toMatchSnapshot();
    
  })
})