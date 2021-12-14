describe("open website Judosensei", ()=>{
    it("open URL", ()=>{
        cy.visit("https://judosensei.nl")
        cy.get('#menu-item-1002 > a').click()
        cy.get('.wpcf7-form > :nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').select("Pijnacker")
    })
})
