describe("App integration tests", () => {
    it("filters Messages when Member is clicked. Unfilters when 'Show All Messages' button is clicked", () => {
        cy.visit("/");
        cy.get(".message_component").should("have.length", 100);
        cy.get(".member_component:nth-child(5)").click();
        cy.get(".message_component").should("have.length", 3);
        cy.get(".show_all").click();
        cy.get(".message_component").should("have.length", 100);
    })
})