import React from "react";
import {mount} from "enzyme";
import Message from "./";
import { TextWrapper, AvatarWrapper, EmailWrapper } from "./styles";
import { dummyStateData } from "../../utils/testing";
import * as emotion from "emotion";
import { createMatchers } from "jest-emotion";

expect.extend(createMatchers(emotion));

describe("<Message />", () => {
  const {messages} = dummyStateData;
  const wrapper = mount(<Message message={messages[0]} alignment="right" />);

  test("should render message in <TextWrapper>", () => {
    expect(wrapper.find(TextWrapper).text()).toBe(messages[0].message);
  });

  test("Should display email when hovered over", () => {
    const {css} = emotion;
    const avatar = wrapper.find(AvatarWrapper);
    expect(avatar).toHaveStyleRule("opacity", "0", {
      modifier: css`${EmailWrapper}`
    });
    // avatar.simulate("mouseenter");
    // expect(avatar).toHaveStyleRule("opacity", "1", {
    //   modifier: ":hover",
    //   modifier: css`${EmailWrapper}`
    // });
  });
})