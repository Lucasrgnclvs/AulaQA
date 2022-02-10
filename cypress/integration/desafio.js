import {  ModCompraS, ConfirmTelaInicial, paginacadastro } from "./modulo/modulo.js";

before(() => {

    cy.visit("https://demo.nopcommerce.com/");

})

describe("navegação pagina inicial e compras", () => {

    
    const cadastro = new paginacadastro();
    const compra = new ModCompraS();
    const selecionar = new ConfirmTelaInicial();


    //FAZER CADASTRO NO SITE

    it.only("Cadastro", () => {
        cadastro.botaoregistro();
        cadastro.caixagenero();
        cadastro.nome("Nome", "Sobrenome");
        cadastro.datadia();
        cadastro.datames();
        cadastro.dataano();
        cadastro.email("teste28@teste.com");
        cadastro.caixaaviso();
        cadastro.senha("Teste1", "Teste1");
        cadastro.botaocadastrar();
        cadastro.botaofinal();
        cy.get('.ico-logout').should("contain", "Log out");

    })
    

    //CONFIRMAÇÃO DA PÁGINA INICIAL
  

    it.only("primeiro acesso a um site verificação da página inicial", () => {

        selecionar.botaopaginicial();
        selecionar.compara30().should("have.text", "Online shopping is the process consumers go through to purchase products or services over the Internet. You can edit this in the admin site.");

        //MENU SUPERIOR - moeda

        selecionar.selecionareuro();
        selecionar.selecionardolar();

        //MENU SUPERIOR  - Register
        selecionar.compara3().should("have.text", "Register");
        selecionar.botaoclicarregistro();
        selecionar.compara4().should("have.text", "Your Personal Details");
        selecionar.botaopaginicial();

    })

    // PROCESSO DE COMPRAS e verificação do carrinho

    it.only("TESTE DE COMPRA", () => {


        //computer
        compra.compara22().should("have.text", "Computers ");

        compra.botaocatcomputer();

        compra.compara5().should("have.text", "Computers ");

        //Prod. Categoria notebook
        compra.botaonotebook();

        compra.botaopegarnote();

        compra.compara1().should("have.text", "Asus N551JK-XO076H Laptop");


        compra.botaoaddnotecarrinho();

        //confirmar prod. no carrinho

        compra.botaocarrinho();

        compra.compara6().should("have.text", "Asus N551JK-XO076H Laptop");
        compra.compara7().should("have.text", "$1,500.00");

        //voltar a pagina inicial

        compra.botaovoltarpaginicial();



        //Prod. Categoria eletronics

        compra.botaoeletronicos();

        compra.compara8().should("have.text", "Electronics");

        compra.botaocelular();

        compra.compara9().should("have.text", "Cell phones");

        compra.botaoselectcell();

       compra.compara10().should("contain", "HTC One");

        compra.botaoaddprodcellcarrinho();


        //confirmar prod. no carrinho

        compra.botaocarrinho();
        compra.compara11().should("contain", "HTC One");
        compra.compara12().should("have.text", "$1,600.00");

        //voltar a pagina inicial

        compra.botaovoltarpaginicial();


        //Prod. Categoria Apparel

        compra.botaocatapprel();

        compra.compara13().should("have.text", "Apparel");

        compra.botaoacessorio();

        compra.compara14().should("have.text", "Accessories");

        compra.botaorayban();

       compra.compara15().should("contain", "Ray Ban");

        compra.botaoaddprodraybancarrinho();

        //confirmar prod. no carrinho

        compra.botaocarrinho();

        compra.compara16().should("contain", "Ray Ban");
        compra.compara17().should("have.text", "$1,625.00");
        //voltar a pagina inicial

        compra.botaovoltarpaginicial();


        //Prod. Categoria Books

        compra.botaocatlivros();

        compra.botaoselectlivro();

         compra.compara18().should("have.text", "Pride and Prejudice");

        compra.botaoaddlivrocarrinho();

        compra.compara19().should("have.text", "Pride and Prejudice");



        //confirmar prod. no carrinho

        compra.botaocarrinho();
        compra.compara20().should("have.text", "$1,649.00");

        //REMOVER PRODUTO DO CARRINHO

        compra.botaoremoverprodcarrinho();

        //confirmar remoção
        compra.compara21().should("have.text", "$1,549.00");

    })


})