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




