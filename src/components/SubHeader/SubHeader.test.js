import React from "react";

import SubHeader from ".";

describe("<SubHeader />", () => {
    test("should match snapshot", () => {
        expect(<SubHeader />).toMatchSnapshot();
    })
})