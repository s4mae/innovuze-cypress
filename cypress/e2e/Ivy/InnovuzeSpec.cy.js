describe('Dev Innovuze Test', () => {
  it.only('Visits the Innovuze Home Page', () => {
  cy.visit('https://dev.innovuze.com/');


  cy.get('.nav-link.home').should('contain', 'Home').click();

  
  cy.get('.nav-item > .nav-link:nth-child(1)').should('contain', 'About');

  
  cy.get('.banner-item').should('exist');

  
  cy.get('.banner-item > div > img').click();

  
  cy.get('.innovuze-logo-banner-wrapper').should('be.visible');

  
  cy.get('.innovuze-banner-text.text-center').should('contain', 'Innovuze Solutions, Inc.');

 
  cy.get('.banner-item1.parallelogram').should('exist');

 
  cy.get('.banner-big-text').should('contain', 'p');

  
  cy.get('.banner-small-text').should('contain', 'p');

 
  cy.get('.banner-btns > div > div:first-child').click();
  cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });
 
  cy.get('.modal-body > .btn-close-wrapper > .btn-close > .fa-stack').click();

 
  cy.get('.banner-btns > div > div:last-child');
});
});

it('Visits the Innovuze About Page', () => {
cy.visit('https://dev.innovuze.com/');

cy.get('.about-us');

cy.get('div.innovuze-logo-rectangle > h2')
  .invoke('text')
  .then((text) => text.replace('\n', ' '))
  .should('eq', 'Who We Are');

cy.get('#abtTxtWrapper > .abtus-text > p').each(($p) => {});
cy.get('.abt-us-btn-wrapper > .btn').click(); //should be clickable button
});

it('Visits the Innovuze Services Page', () => {
cy.visit('https://dev.innovuze.com/')


cy.get('#services')
cy.get('#services > div > .section-title > p').should('contain', 'What We Do')
cy.get('#services > div > .services-subtitle > p')
cy.get('#services .row > div img:eq(0)').should('be.visible');
cy.get('#services .row > div > .services-title p:eq(0)').should('be.visible');
cy.get('#services .row > div > .services-description p:eq(0)').should('be.visible');
cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(0)').click();
cy.get('.modal-content > .modal-body > .btn-close-wrapper').should('be.visible').click();

const numServices = 8;

for (let i = 0; i < numServices; i++) {
  cy.get(`#services .row > div img:eq(${i})`).should('be.visible');
  cy.get(`#services .row > div > .services-title p:eq(${i})`).should('be.visible');
  cy.get(`#services .row > div > .services-description p:eq(${i})`).should('be.visible');
  cy.get(`#services .row > div > .btn-inquireNow-wrapper a:eq(${i})`).click({ force: true });
  cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });
}


cy.get('#ourTechStack > div h2').should('contain', 'Our Tech Stack');

const numTechStackIcons = 17;

for (let i = 0; i < numTechStackIcons; i++) {
  cy.get(`.row > .col-4 > .techStackIconWrapper img:eq(${i})`).should('be.visible');

}

cy.get('.row >.text-center > .btn.btn-getStarted').click({ force: true });
cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });


// cy.get('#services .row > div img:eq(1)')
// cy.get('#services .row > div > .services-title p:eq(1)')
// cy.get('#services .row > div > .services-description p:eq(1)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(1)').click();
// cy.get('.modal-content > .modal-body > .btn-close-wrapper > .btn-close').click();

// cy.get('#services .row > div img:eq(2)')
// cy.get('#services .row > div > .services-title p:eq(2)')
// cy.get('#services .row > div > .services-description p:eq(2)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(2)').click({ force: true });
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });

// cy.get('#services .row > div img:eq(3)')
// cy.get('#services .row > div > .services-title p:eq(3)')
// cy.get('#services .row > div > .services-description p:eq(3)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(3)').click({ force: true });
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });

// cy.get('#services .row > div img:eq(4)')
// cy.get('#services .row > div > .services-title p:eq(4)')
// cy.get('#services .row > div > .services-description p:eq(4)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(4)').click({ force: true });
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });

// cy.get('#services .row > div img:eq(5)')
// cy.get('#services .row > div > .services-title p:eq(5)')
// cy.get('#services .row > div > .services-description p:eq(5)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(5)').click({ force: true });
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });

// cy.get('#services .row > div img:eq(6)')
// cy.get('#services .row > div > .services-title p:eq(6)')
// cy.get('#services .row > div > .services-description p:eq(6)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(6)').click({ force: true });
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });

// cy.get('#services .row > div img:eq(7)')
// cy.get('#services .row > div p:eq(7)') //remove .services
// cy.get('#services .row > div > .services-description p:eq(7)')
// cy.get('#services .row > div > .btn-inquireNow-wrapper a:eq(7)').click({ force: true });
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true });

// cy.get('#ourTechStack > div h2').should('contain', 'Our Tech Stack')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(0)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(1)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(2)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(3)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(4)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(5)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(6)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(7)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(8)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(9)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(10)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(11)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(12)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(13)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(14)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(15)')
// cy.get('.row > .col-4 > .techStackIconWrapper img:eq(16)')
// cy.get('.row >.text-center > .btn.btn-getStarted').click({ force: true })
// cy.get('.modal-content > .modal-body > .btn-close-wrapper').click({ force: true })




})


