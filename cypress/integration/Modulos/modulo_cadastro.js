export class sitegeral{
    resolucao(){
        return cy.viewport(1360, 768);
    }
    site(){
        return cy.visit("https://demo.nopcommerce.com/");
    }
}
export class paginacadastro{
    botaoregistro(){
        return cy.get('.ico-register').click();
    }
    caixagenero(){
        return cy.get('#gender-male').click();
    }
    nome(nome, sobrenome){
        cy.get('#FirstName').type(nome);
        cy.get('#LastName').type(sobrenome);
    }
    datadia(){
        return cy.get('[name="DateOfBirthDay"]').select("1");
    }
    datames(){
        return cy.get('[name="DateOfBirthMonth"]').select("January");
    }
    dataano(){
        return cy.get('[name="DateOfBirthYear"]').select("2000");
    }
    email(email){ 
        cy.get('#Email').type(email);
    }
    caixaaviso(){
        return cy.get('#Newsletter').click();
    }
    senha(senha, confirmasenha){
        cy.get('#Password').type(senha);
        cy.get('#ConfirmPassword').type(confirmasenha);
    }
    botaocadastrar(){
        return cy.get('#register-button').click();
    }
    botaofinal(){
        return cy.get('.buttons > .button-1').click();
    }
}
export class paginalogin{
    botaologin(){
        return cy.get('.ico-login').click();
    }
    dados(email, senha){
        cy.get('#Email').type(email);
        cy.get('#Password').type(senha);
    }
    caixasenha(){
        return cy.get('#RememberMe').click();
    }
    botaoacessar(){
        cy.get('form > .buttons > .button-1').click();
    }
}
