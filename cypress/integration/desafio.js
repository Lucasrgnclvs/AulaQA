import {  ModCompraS, ConfirmTelaInicial, paginacadastro } from "./Modulos/modulo.js";

before(() => {

    cy.visit("https://demo.nopcommerce.com/");

})

describe("navegação pagina inicial e compras", () => {

    
    const compra = new ModCompraS();
   
        compra.alteraqtd("2");
        compra.confirmaTermo();
        //voltar a pagina inicial

        

})
