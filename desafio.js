describe("Desafio", () => {

    before(() => {
        cy.viewport(1360, 768);
        cy.visit("https://demo.nopcommerce.com/");      
    })

    it("Cadastro", () => {
        cy.get('.ico-register').click();
        cy.get('#gender-male').click();
        cy.get('#FirstName').type("Nome");
        cy.get('#LastName').type("Sobrenome");
        cy.get('[name="DateOfBirthDay"]').select("1");
        cy.get('[name="DateOfBirthMonth"]').select("January");
        cy.get('[name="DateOfBirthYear"]').select("2000");
        cy.get('#Email').type("teste@teste.com");
        cy.get('#Newsletter').click();
        cy.get('#Password').type("Teste1");
        cy.get('#ConfirmPassword').type("Teste1");
        cy.get('#register-button').click();
        cy.get('.buttons > .button-1').click();
        cy.get('.ico-logout').should("contain", "Log out");
    })

    it.skip("Login", () => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.get('.ico-login').click();
        cy.get('#Email').type("teste@teste.com");
        cy.get('#Password').type("Teste1");
        cy.get('#RememberMe').click();
        cy.get('form > .buttons > .button-1').click();
        cy.get('.ico-logout').should("contain", "Log out");
    })
})
