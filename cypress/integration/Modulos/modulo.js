
export class ModCompraS {
    alteraqtd(qtd){
        cy.get('[type="checkbox"]').check({ force: true });
        cy.get('.qty-input').clear(); 
        cy.get('.qty-input').type(qtd);
    }
    confirmaTermo(){
        cy.get('#termsofservice').click();
    }

}