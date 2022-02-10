import { PaginaCheckout, PaginaBilling, PaginaShippadd, PaginaShippmet, PaginaPaymet, PaginaPayinfo, PaginaRevisao, PaginaConfirm, PaginaInicial } from "./Modulos/Modulos_Checkout.js";

describe("Projeto Final", () => {

    const checkout = new PaginaCheckout();
    const billing = new PaginaBilling();
    const shippadd = new PaginaShippadd();
    const shippmet = new PaginaShippmet();
    const paymet = new PaginaPaymet();
    const payinfo = new PaginaPayinfo();
    const revisao = new PaginaRevisao();
    const confirma = new PaginaConfirm ();
    const inicial = new PaginaInicial ();

    before(() => {
        cy.visit("https://demo.nopcommerce.com/");
    })

    it("PROCESSO COMPLETO", () => {

        //Registrar novo usuário
        cy.get('.ico-register').click();

        //Confirmar página de registro de usuário    
        cy.get('form > :nth-child(1) > .title > strong').should("have.text", "Your Personal Details");

        //Registrar dados pessoais e senha
        cy.get('.male').click();
        cy.get('#FirstName').type("Nome");
        cy.get('#LastName').type("Sobrenome");
        cy.get('[name="DateOfBirthDay"]').select("17");
        cy.get('[name="DateOfBirthMonth"]').select("4");
        cy.get('[name="DateOfBirthYear"]').select("1991");
        cy.get('#Email').type("user11@teste.com");
        cy.get('#Company').type("QA Test");
        cy.get('#Password').type("123456");
        cy.get('#ConfirmPassword').type("123456");
        cy.get('#register-button').click();

        //Selecionar categoria Computers
        cy.get('.notmobile > :nth-child(1) > [href="/computers"]').click();

        //Confirmar página da categoria COMPUTERS
        cy.get('.page').should("contain", "Desktops", "Notebooks", "Software");

        //Selecionar produtos
        cy.get('.active > .sublist > :nth-child(1) > a').click();
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click();

        //Carrinho
        cy.get('.cart-label').click();
        cy.get('[type="checkbox"]').check({ force: true });
        cy.get('#checkout').click();

        //Verificar Página Checkout
        checkout.verificaCheckout().should("contain", "Checkout");

        //#04.1 [Processo de Checkout] Billing Address
        billing.trocaEndereco();
        billing.billingUser("United States", "Florida", "Orlando", "Sesame Street", "456", "98753215", "6215-852", "5487852");
        billing.botaoStep2();

        //#04.2 [Processo de Checkout] Shipping address
        shippadd.cadastroEndereco();
        shippadd.shippingUser("Nome2", "Sobrenome2", "user100@teste.com", "Dev Test", "United States", "California", "Colorado", "Another Street", "123", "18279542", "2485-695", "1597532");
        shippadd.botaoStep3();

        //#04.3 [Processo de Checkout] Shipping method
        shippmet.shipOption();
        shippmet.botaoStep4();

        //#04.4 [Processo de Checkout] Payment method
        paymet.creditOption();
        paymet.botaoStep5();

        //#04.5 [Processo de Checkout] Payment information
        payinfo.cardInfo();
        payinfo.botaoStep6();

        //#04.6 [Processo de Checkout] Confirm order
        revisao.billName().should("contain", "Nome Sobrenome");
        revisao.billEmail().should("contain", "Email: user11@teste.com");
        revisao.billPhone().should("contain", "Phone: 6215-852");
        revisao.billFax().should("contain", "Fax: 5487852");
        revisao.billCompany().should("contain", "QA Test");
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

        //Validar realização do pedido
        confirma.verificaPedido().should("contain", "Your order has been successfully processed!");
        confirma.botaoContinue();

        //Sair da plataforma
        inicial.botaoSair();
    })

})