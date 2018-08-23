import React from "react";
import {mount} from "enzyme";

import Member from "./";
import { dummyData } from "../../service.test";

describe("<Message />", () => {
  const {members} = dummyData;
  test("should run makeActiveMember function when clicked", async () => {
    const func = jest.fn();
    const wrapper = mount(<Member member={members[0]} makeActiveMember={func} />);
    wrapper.simulate("click");
    expect(func).toHaveBeenCalled();
  });
})