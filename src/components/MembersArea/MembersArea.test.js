import React from "react";
import { mount } from "enzyme";

import MembersArea from ".";
import { TopSection, NameHeading, DetailsHeading } from "./styles";
import { dummyStateData } from "../../utils/testing";

describe("<MembersArea />", () => {
    let component; let activeFn; let clearFn;
    const {members} = dummyStateData;
    const member = members[1];
    beforeEach(() => {
        activeFn = jest.fn();
        clearFn = jest.fn();
        component = mount(<MembersArea members={members} activeMember={member} makeActiveMember={activeFn} clearActiveMember={clearFn} />);
    })

    test("must display member details section of selected member", () => {
        expect(component.find(TopSection)).toExist();
        expect(component.find(TopSection).find(NameHeading)).toHaveText(`${member.firstName} ${member.lastName}`);
        expect(component.find(TopSection).find(DetailsHeading).first()).toHaveText(member.email);
        expect(component.find(TopSection).find(DetailsHeading).last()).toHaveText(member.ip);
    });

    test("must call makeActiveMember function when member clicked", () => {
        component.find(".member_component").first().simulate("click");
        expect(activeFn).toHaveBeenCalledWith(members[0]);
    })
});
