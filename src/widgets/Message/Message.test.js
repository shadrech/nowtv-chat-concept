import React from "react";
import {mount} from "enzyme";
import Message from "./";
import { TextWrapper, AvatarWrapper, EmailWrapper } from "./styles";
import { dummyStateData } from "../../utils/testing";

describe("<Message />", () => {
  const {messages} = dummyStateData;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Message message={messages[0]} alignment="right" />);
  })

  test("should render message in <TextWrapper>", () => {
    expect(wrapper.find(TextWrapper).text()).toBe(messages[0].message);
  });

  test("should display email when hovered over", () => {
    let mail = wrapper.find(EmailWrapper);
    expect(mail).not.toExist();
    wrapper.find(AvatarWrapper).simulate("mouseenter");
    expect(wrapper).toHaveState("showEmail", true);
    mail = wrapper.find(EmailWrapper);
    expect(mail).toExist();
    expect(mail).toHaveText(messages[0].email);
  });

  test("should render accordingly if alignment = 'right'", () => {
    expect(wrapper).toHaveStyleRule("justify-content", "flex-end");
    const text = wrapper.find(TextWrapper);
    // expect(text).toHaveStyleRule("background", "#EE5C26");
    // expect(text).toHaveStyleRule("color", "white");
    // expect(text).toHaveStyleRule("order", "1");
    expect(text).toHaveStyleRule("border-bottom", "1rem solid #EE5C26", {
      modifier: ":after"
    });
  });

  test("should render accordingly if alignment = 'left'", () => {
    const wrapper2 = mount(<Message message={messages[0]} alignment="left" />);
    expect(wrapper2).toHaveStyleRule("justify-content", "flex-start");
    const text = wrapper2.find(TextWrapper);
    // expect(text).toHaveStyleRule("background", "#EE5C26");
    // expect(text).toHaveStyleRule("color", "white");
    // expect(text).toHaveStyleRule("order", "1");
    expect(text).toHaveStyleRule("border-bottom", "1rem solid white", {
      modifier: ":after"
    });
  });
});
