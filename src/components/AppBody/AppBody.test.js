import React from "react";
import {shallow} from "enzyme";

import AppBody from "./";
import { dummyData } from "../../service.test";

describe("<AppBody />", () => {
  const {messages, members} = dummyData;
  test("should render as expected", async () => {
    const appBody = shallow(<AppBody messages={messages} members={members} />);
    expect(appBody).toMatchSnapshot();
    
  })
})