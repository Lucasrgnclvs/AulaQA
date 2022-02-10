//import { it } from "mocha";
import { PaginaCheckout, PaginaBilling, PaginaShippadd, PaginaShippmet, PaginaPaymet, PaginaPayinfo, PaginaRevisao, PaginaConfirm, PaginaInicial } from "./Modulos/Modulos_Completo.js";
import { ModCompraS, ConfirmTelaInicial, paginacadastro } from "./Modulos/Modulos_Completo.js";

describe("Projeto Final", () => {

    before(() => {
        cy.visit("https://demo.nopcommerce.com/");
    })

it("Teste Copmpleto NopCommerce", () => {

    const cadastro = new paginacadastro();
    const compra = new ModCompraS();
    const selecionar = new ConfirmTelaInicial();
    const checkout = new PaginaCheckout();
    const billing = new PaginaBilling();
    const shippadd = new PaginaShippadd();
    const shippmet = new PaginaShippmet();
    const paymet = new PaginaPaymet();
    const payinfo = new PaginaPayinfo();
    const revisao = new PaginaRevisao();
    const confirma = new PaginaConfirm();
    const inicial = new PaginaInicial();

    selecionar.botaopaginicial();
    selecionar.compara30().should("have.text", "Online shopping is the process consumers go through to purchase products or services over the Internet. You can edit this in the admin site.");

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

    selecionar.selecionareuro();
    selecionar.selecionardolar();

    selecionar.botaopaginicial();

    compra.compara22().should("have.text", "Computers ");
    compra.botaocatcomputer();
    compra.compara5().should("have.text", "Computers ");
    compra.botaonotebook();
    compra.botaopegarnote();
    compra.compara1().should("have.text", "Asus N551JK-XO076H Laptop");
    compra.botaoaddnotecarrinho();
    compra.botaocarrinho();
    cy.wait(3000);
    compra.compara6().should("have.text", "Asus N551JK-XO076H Laptop");
    compra.compara7().should("have.text", "$1,500.00");

    compra.botaovoltarpaginicial();

    compra.botaoeletronicos();
    compra.compara8().should("have.text", "Electronics");
    compra.botaocelular();
    compra.compara9().should("have.text", "Cell phones");
    compra.botaoselectcell();
    compra.compara10().should("contain", "HTC One");
    compra.botaoaddprodcellcarrinho();
    compra.botaocarrinho();
    cy.wait(3000);
    compra.compara11().should("contain", "HTC One");
    compra.compara12().should("have.text", "$1,600.00");

    compra.botaovoltarpaginicial();

    compra.botaocatapprel();
    compra.compara13().should("have.text", "Apparel");
    compra.botaoacessorio();
    compra.compara14().should("have.text", "Accessories");
    compra.botaorayban();
    compra.compara15().should("contain", "Ray Ban");
    compra.botaoaddprodraybancarrinho();
    compra.botaocarrinho();
    cy.wait(3000);
    compra.compara16().should("contain", "Ray Ban");
    compra.compara17().should("have.text", "$1,625.00");

    compra.botaovoltarpaginicial();

    compra.botaocatlivros();
    compra.botaoselectlivro();
    compra.compara18().should("have.text", "Pride and Prejudice");
    compra.botaoaddlivrocarrinho();
    compra.compara19().should("have.text", "Pride and Prejudice");
    compra.botaocarrinho();
    cy.wait(3000);
    compra.compara20().should("have.text", "$1,649.00");
    compra.botaoremoverprodcarrinho();
    compra.compara21().should("have.text", "$1,549.00");

    compra.confirmaTermo();

    cy.get('#checkout').click();

    checkout.verificaCheckout().should("contain", "Checkout");

    billing.trocaEndereco();
    billing.billingUser("United States", "Florida", "Orlando", "Sesame Street", "456", "98753215", "6215-852", "5487852");
    billing.botaoStep2();

    shippadd.cadastroEndereco();
    shippadd.shippingUser("Nome2", "Sobrenome2", "user100@teste.com", "Dev Test", "United States", "California", "Colorado", "Another Street", "123", "18279542", "2485-695", "1597532");
    shippadd.botaoStep3();

    shippmet.shipOption();
    shippmet.botaoStep4();

    paymet.creditOption();
    paymet.botaoStep5();

    payinfo.cardInfo();
    payinfo.botaoStep6();

    revisao.billName().should("contain", "Nome Sobrenome");
    revisao.billEmail().should("contain", "Email: teste@teste.com");
    revisao.billPhone().should("contain", "Phone: 6215-852");
    revisao.billFax().should("contain", "Fax: 5487852");
    revisao.billAdd1().should("contain", "Sesame Street");
    revisao.billAdd2().should("contain", "456");
    revisao.billLocal().should("contain", "Orlando,Florida,98753215");
    revisao.billCountry().should("contain", "United States");

    revisao.shippName().should("contain", "Nome2 Sobrenome2");
    revisao.shippEmail().should("contain", "Email: user100@teste.com");
    revisao.shippPhone().should("contain", "Phone: 2485-695");
    revisao.shippFax().should("contain", "Fax: 1597532");
    revisao.shippCompany().should("contain", "Dev Test");
    revisao.shippAdd1().should("contain", "Another Street");
    revisao.shippAdd2().should("contain", "123");
    revisao.shippLocal().should("contain", "Colorado,California,18279542");
    revisao.shippCountry().should("contain", "United States");

    revisao.confPayment().should("contain", "Credit Card");
    revisao.confShippmet().should("contain", "Next Day Air");
    revisao.botaoConfirm();

    confirma.verificaPedido().should("contain", "Your order has been successfully processed!");
    confirma.botaoContinue();

    inicial.botaoSair();
})

})