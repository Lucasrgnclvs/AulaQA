import {paginacadastro, paginalogin, sitegeral} from "./Modulos/modulo.js";

describe("Desafio", () => {

    const geral = new sitegeral();
    const cadastro = new paginacadastro();
    const login = new paginalogin();

    before(() => {
        geral.resolucao();
        geral.site();      
    })

    it("Cadastro", () => {
        cadastro.botaoregistro();
        cadastro.caixagenero();
        cadastro.nome("Nome", "Sobrenome");
        cadastro.datadia();
        cadastro.datames();
        cadastro.dataano();
        cadastro.email("teste@teste.com");
        cadastro.caixaaviso();
        cadastro.senha("Teste1", "Teste1");
        cadastro.botaocadastrar();
        cadastro.botaofinal();
        cy.get('.ico-logout').should("contain", "Log out");
    })

    it.skip("Login", () => {
        login.botaologin();
        login.dados("teste@teste.com", "Teste1");
        login.caixasenha();
        login.botaoacessar();
        cy.get('.ico-logout').should("contain", "Log out");
    })
})
