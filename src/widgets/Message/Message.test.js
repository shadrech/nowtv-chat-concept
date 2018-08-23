import React from "react";
import {mount} from "enzyme";

import Message from "./";
import { TextWrapper } from "./styles";
import { dummyData } from "../../service.test";

describe("<Message />", () => {
  const {messages} = dummyData;
  test("should render message in <TextWrapper>", async () => {
    const wrapper = mount(<Message message={messages[0]} alignment="right" />);
    expect(wrapper.find(TextWrapper).text()).toBe("Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.");
  });
})