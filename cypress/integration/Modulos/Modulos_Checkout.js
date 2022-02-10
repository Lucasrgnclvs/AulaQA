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
