import React from "react";

import Header from ".";

describe("<Header />", () => {
    test("should match snapshot", () => {
        expect(<Header />).toMatchSnapshot();
    })
})