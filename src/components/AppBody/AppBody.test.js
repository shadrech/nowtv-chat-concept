import React from "react";
import {shallow, mount} from "enzyme";

import AppBody from "./";
import Message from "../../widgets/Message";
import { dummyStateData } from "../../utils/testing";

describe("<AppBody />", () => {
  const {messages, members} = dummyStateData;
  const activeFn = jest.fn();
  const clearFn = jest.fn();
  test("should render as expected", () => {
    const appBody = shallow(<AppBody messages={messages} members={members} makeActiveMember={activeFn} clearActiveMember={clearFn} />);
    expect(appBody).toMatchSnapshot();
  });

  test("must display all messages when no member is selected", () => {
    const appBody = mount(<AppBody messages={messages} members={members} makeActiveMember={activeFn} clearActiveMember={clearFn} />);
    expect(appBody.find(Message)).toHaveLength(4);
  });

  test("must display correct number of messages when member is selected", () => {
    const appBody = mount(<AppBody messages={messages} members={members} activeMember={members[1]} makeActiveMember={activeFn} clearActiveMember={clearFn} />);
    expect(appBody.find(Message)).toHaveLength(2);
  });
});