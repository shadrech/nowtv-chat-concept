import React from "react";
import {mount, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Message from "./";
import { TextWrapper, AvatarWrapper } from "./styles";
import { dummyStateData } from "../../utils/testing";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";

expect.addSnapshotSerializer(createSerializer(emotion))

describe("<Message />", () => {
  const {messages} = dummyStateData;
  const wrapper = mount(<Message message={messages[0]} alignment="right" />);
  test("should render message in <TextWrapper>", () => {
    expect(wrapper.find(TextWrapper).text()).toBe("Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.");
  });
})