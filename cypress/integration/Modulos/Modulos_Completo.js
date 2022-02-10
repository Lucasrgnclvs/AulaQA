export class ConfirmTelaInicial {

    //CONFIRMAÇÃO DA PÁGINA INICIAL

    compara30() {
        return cy.get('.topic-block-body > :nth-child(1)');
    }

    //MENU SUPERIOR - moeda
    compara3() {
        return cy.get('.topic-block-body > :nth-child(1)');
    }

    selecionareuro() {
        cy.get('#customerCurrency').select("Euro");
    }

    selecionardolar() {
        cy.get('#customerCurrency').select("US Dollar");

    }

    //MENU SUPERIOR  - Register

    compara3() {
        return cy.get('.ico-register');
    }
    botaoclicarregistro() {
        cy.get('.ico-register').click();
    }
    compara4() {
        return cy.get('form > :nth-child(1) > .title > strong');
    }
    botaopaginicial() {
        cy.get('.header-logo > a > img').click();
    }



}


export class ModCompraS {

    alteraqtd(qtd) {
        cy.get('[type="checkbox"]').check({ force: true });
        cy.get('.qty-input').clear();
        cy.get('.qty-input').type(qtd);
    }
    confirmaTermo() {
        cy.get('#termsofservice').click();
    }

    //computer

    compara22() {
        return cy.get('.notmobile > :nth-child(1) > [href="/computers"]');
    }
    botaocatcomputer() {
        cy.get('.notmobile > :nth-child(1) > [href="/computers"]').click();
    }

    compara5() {
        return cy.get('.notmobile > :nth-child(1) > [href="/computers"]');
    }
    //Prod. Categoria notebook

    botaonotebook() {
        cy.get(':nth-child(2) > .sub-category-item > .title > a').click();
    }

    botaopegarnote() {
        cy.get(':nth-child(2) > .product-item > .picture > a > img').click();
    }

    compara1() {
        return cy.get('h1');
    }


    botaoaddnotecarrinho() {
        cy.get('#add-to-cart-button-5').click();
    }

    //confirmar prod. no carrinho

    botaocarrinho() {

        cy.get('.cart-label').click();

    }

    compara6() {
        return cy.get('tbody > :nth-child(1) > .product');
    }

    compara7() {
        return cy.get('.value-summary > strong');
    }

    //voltar a pagina inicial

    botaovoltarpaginicial() {
        cy.get('.header-logo > a > img');

    }

    //Prod. Categoria eletronics

    botaoeletronicos() {

        cy.get('.notmobile > :nth-child(2) > [href="/electronics"]').click();
    }

    compara8() {
        return cy.get('h1');
    }

    botaocelular() {
        cy.get(':nth-child(2) > .sub-category-item > .title > a').click();
    }

    compara9() {
        return cy.get('h1');
    }

    botaoselectcell() {
        cy.get(':nth-child(2) > .product-item > .picture > a > img').click();

    }
    compara10() {
        return cy.get('h1');
    }

    botaoaddprodcellcarrinho() {

        cy.get('#add-to-cart-button-19').click();

    }
    compara11() {
        return cy.get('tbody > :nth-child(2) > .product');
    }

    compara12() {
        return cy.get('.value-summary > strong');
    }
    //confirmar prod. no carrinho

    botaocarrinho() {
        cy.get('.cart-label').click();

    }

    //voltar a pagina inicial

    botaovoltarpaginicial() {
        cy.get('.header-logo > a > img');

    }


    //Prod. Categoria Apparel

    botaocatapprel() {
        cy.get('.notmobile > :nth-child(3) > [href="/apparel"]').click();
    }
    compara13() {
        return cy.get('h1');
    }

    botaoacessorio() {

        cy.get(':nth-child(3) > .sub-category-item > .title > a').click();

    }
    compara14() {
        return cy.get('h1');
    }

    botaorayban() {

        cy.get(':nth-child(2) > .product-item > .picture > a > img').click();
    }

    compara15() {
        return cy.get('h1');
    }

    botaoaddprodraybancarrinho() {

        cy.get('#add-to-cart-button-33').click();
    }


    //confirmar prod. no carrinho

    botaocarrinho() {
        cy.get('.cart-label').click();

    }

    compara16() {
        return cy.get('tbody > tr > .product');
    }

    compara17() {
        return cy.get('.value-summary > strong');
    }
    //voltar a pagina inicial

    botaovoltarpaginicial() {
        cy.get('.header-logo > a > img');

    }


    //Prod. Categoria Books

    botaocatlivros() {

        cy.get('.notmobile > :nth-child(5) > a').click();
    }

    botaoselectlivro() {

        cy.get(':nth-child(3) > .product-item > .picture > a > img').click();
    }

    compara18() {
        return cy.get('h1');
    }

    botaoaddlivrocarrinho() {
        cy.get('#add-to-cart-button-39').click();
    }

    compara19() {
        return cy.get('h1');
    }

    //confirmar prod. no carrinho

    botaocarrinho() {
        cy.get('.cart-label').click();

    }

    compara20() {
        return cy.get('.value-summary > strong');
    }

    //REMOVER PRODUTO DO CARRINHO

    botaoremoverprodcarrinho() {

        cy.get(':nth-child(2) > .remove-from-cart').click();

    }



    //REMOVER PRODUTO DO CARRINHO

    botaoremoverprodcarrinho() {
        cy.get(':nth-child(2) > .remove-from-cart > .remove-btn').click();
    }

    compara21() {
        return cy.get('.value-summary > strong');
    }




}

export class PaginaCheckout {
    verificaCheckout() {
        return cy.get('.page-title');
    }
}

export class PaginaBilling {
    trocaEndereco() {
        cy.get('#ShipToSameAddress').click();
    }
    billingUser(country, state, city, add1, add2, zipcod, phone, fax) {
        cy.get('#BillingNewAddress_CountryId').select(country);
        cy.get('#BillingNewAddress_StateProvinceId').select(state);
        cy.get('#BillingNewAddress_City').type(city);
        cy.get('#BillingNewAddress_Address1').type(add1);
        cy.get('#BillingNewAddress_Address2').type(add2);
        cy.get('#BillingNewAddress_ZipPostalCode').type(zipcod);
        cy.get('#BillingNewAddress_PhoneNumber').type(phone);
        cy.get('#BillingNewAddress_FaxNumber').type(fax);
    }
    botaoStep2() {
        cy.get('#billing-buttons-container > .new-address-next-step-button').click();
    }
}

export class PaginaShippadd {
    cadastroEndereco() {
        cy.get('#shipping-address-select').select("New Address");
    }
    shippingUser(name, secname, email, company, country, state, city, add1, add2, zipcod, phone, fax) {
        cy.get('#ShippingNewAddress_FirstName').clear();
        cy.get('#ShippingNewAddress_FirstName').type(name);
        cy.get('#ShippingNewAddress_LastName').clear();
        cy.get('#ShippingNewAddress_LastName').type(secname);
        cy.get('#ShippingNewAddress_Email').clear();
        cy.get('#ShippingNewAddress_Email').type(email);
        cy.get('#ShippingNewAddress_Company').clear();
        cy.get('#ShippingNewAddress_Company').type(company);
        cy.get('#ShippingNewAddress_CountryId').select(country);
        cy.wait(1000);
        cy.get('#ShippingNewAddress_StateProvinceId').select(state);
        cy.get('#ShippingNewAddress_City').type(city);
        cy.get('#ShippingNewAddress_Address1').type(add1);
        cy.get('#ShippingNewAddress_Address2').type(add2);
        cy.get('#ShippingNewAddress_ZipPostalCode').type(zipcod);
        cy.get('#ShippingNewAddress_PhoneNumber').type(phone);
        cy.get('#ShippingNewAddress_FaxNumber').type(fax);
    }
    botaoStep3() {
        cy.get('#shipping-buttons-container > .button-1').click();
    }
}

export class PaginaShippmet {
    shipOption() {
        cy.get('#shippingoption_1').click();
    }
    botaoStep4() {
        cy.get('#shipping-method-buttons-container > .button-1').click();
    }
}

export class PaginaPaymet {
    creditOption() {
        cy.get('#paymentmethod_1').click();
    }
    botaoStep5() {
        cy.get('#payment-method-buttons-container > .button-1').click();
    }
}

export class PaginaPayinfo {
    cardInfo() {
        cy.get('#CreditCardType').select("Master card");
        cy.get('#CardholderName').type("Nome Sobrenome");
        cy.get('#CardNumber').type("5454545454545454");
        cy.get('#ExpireMonth').select("11");
        cy.get('#ExpireYear').select("2022");
        cy.get('#CardCode').type("5454");
    }
    botaoStep6() {
        cy.get('#payment-info-buttons-container > .button-1').click();
    }
}

export class PaginaRevisao {
    billName() {
        return cy.get('.billing-info > .info-list > .name');
    }
    billEmail() {
        return cy.get('.billing-info > .info-list > .email');
    }
    billPhone() {
        return cy.get('.billing-info > .info-list > .phone');
    }
    billFax() {
        return cy.get('.billing-info > .info-list > .fax');
    }
    billCompany() {
        return cy.get('.billing-info > .info-list > .company');
    }
    billAdd1() {
        return cy.get('.billing-info > .info-list > .address1');
    }
    billAdd2() {
        return cy.get('.billing-info > .info-list > .address2');
    }
    billLocal() {
        return cy.get('.billing-info > .info-list > .city-state-zip');
    }
    billCountry() {
        return cy.get('.billing-info > .info-list > .country');
    }
    shippName() {
        return cy.get('.shipping-info > .info-list > .name');
    }
    shippEmail() {
        return cy.get('.shipping-info > .info-list > .email');
    }
    shippPhone() {
        return cy.get('.shipping-info > .info-list > .phone');
    }
    shippFax() {
        return cy.get('.shipping-info > .info-list > .fax');
    }
    shippCompany() {
        return cy.get('.shipping-info > .info-list > .company');
    }
    shippAdd1() {
        return cy.get('.shipping-info > .info-list > .address1');
    }
    shippAdd2() {
        return cy.get('.shipping-info > .info-list > .address2');
    }
    shippLocal() {
        return cy.get('.shipping-info > .info-list > .city-state-zip')
    }
    shippCountry() {
        return cy.get('.shipping-info > .info-list > .country');
    }
    confPayment() {
        return cy.get('.payment-method > .value');
    }
    confShippmet() {
        return cy.get('.shipping-method > .value');
    }
    botaoConfirm() {
        return cy.get('#confirm-order-buttons-container > .button-1').click();
    }
}

export class PaginaConfirm {
    verificaPedido() {
        return cy.get('.section > .title > strong');
    }
    botaoContinue() {
        cy.get('.buttons > .button-1').click();
    }
}

export class PaginaInicial {
    botaoSair() {
        cy.get('.ico-logout').click();
    }
}
export class sitegeral {
    resolucao() {
        return cy.viewport(1360, 768);
    }
    site() {
        return cy.visit("https://demo.nopcommerce.com/");
    }
}
export class paginacadastro {
    botaoregistro() {
        return cy.get('.ico-register').click();
    }
    caixagenero() {
        return cy.get('#gender-male').click();
    }
    nome(nome, sobrenome) {
        cy.get('#FirstName').type(nome);
        cy.get('#LastName').type(sobrenome);
    }
    datadia() {
        return cy.get('[name="DateOfBirthDay"]').select("1");
    }
    datames() {
        return cy.get('[name="DateOfBirthMonth"]').select("January");
    }
    dataano() {
        return cy.get('[name="DateOfBirthYear"]').select("2000");
    }
    email(email) {
        cy.get('#Email').type(email);
    }
    caixaaviso() {
        return cy.get('#Newsletter').click();
    }
    senha(senha, confirmasenha) {
        cy.get('#Password').type(senha);
        cy.get('#ConfirmPassword').type(confirmasenha);
    }
    botaocadastrar() {
        return cy.get('#register-button').click();
    }
    botaofinal() {
        return cy.get('.buttons > .button-1').click();
    }
    checagem() {
        return cy.get('.ico-logout');
    }
}

export class paginalogin {
    botaologin() {
        return cy.get('.ico-login').click();
    }
    dados(email, senha) {
        cy.get('#Email').type(email);
        cy.get('#Password').type(senha);
    }
    caixasenha() {
        return cy.get('#RememberMe').click();
    }
    botaoacessar() {
        return cy.get('form > .buttons > .button-1').click();
    }
    checagem() {
        return cy.get('.ico-logout');
    }
}