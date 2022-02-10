import {paginacadastro, paginalogin, sitegeral} from "./Modulos/modulo_cadastro_cleon.js";

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
        cadastro.checagem().should("contain", "Log out");
    })

    it.skip("Login", () => {
        login.botaologin();
        login.dados("teste@teste.com", "Teste1");
        login.caixasenha();
        login.botaoacessar();
        login.checagem().should("contain", "Log out");
    })
})
