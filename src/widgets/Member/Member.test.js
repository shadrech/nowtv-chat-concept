import React from "react";
import {mount} from "enzyme";

import Member from "./";
import { Name, Text } from "./styles";
import { dummyStateData } from "../../utils/testing";

describe("<Message />", () => {
  const {members} = dummyStateData;
  test("should run makeActiveMember function when clicked", () => {
    const func = jest.fn();
    const wrapper = mount(<Member member={members[0]} makeActiveMember={func} />);
    wrapper.simulate("click");
    expect(func).toHaveBeenCalled();
  });

  test("should render correct member details", () => {
    const wrapper = mount(<Member member={members[0]} makeActiveMember={() => null} />);
    expect(wrapper.find(Name).text()).toBe("Amanda Baker");
    expect(wrapper.find(Text).text()).toBe("3 messages");
  });
})