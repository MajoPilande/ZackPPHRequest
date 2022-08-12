describe('Visit website', () => {

  beforeEach(() => {
    cy.viewport('iphone-xr')
  })

  it('Visits website in mobile view', () => {
    cy.visit('https://www.stevenstone.co.uk/create-engagement-rings')
    cy.get('.container > .close').click()
  })

  it('Sort by Price: Low-High', () => {
    cy.scrollTo('top')
    cy.get('#sortDropdownDesktop > .fa').click({force: true})
    cy.contains('Price: Low - High').click({force: true})
  });

  it('Select 18ct Yellow Gold Round Brilliant Simplicity Engagement Ring', () => {
    cy.contains('18ct Yellow Gold Round Brilliant Simplicity').scrollIntoView()
    .should('be.visible')
    .click({force: true})
  });

  it('Choose Diamond', () => {
    cy.contains('Choose A Diamond').scrollIntoView()
    .should('be.visible')
    .click({force: true})
  });

  it('Select Natural Diamond', () => {
    cy.get('#diamondSelectionModal .modal-body a.natural-diamond', { timeout: 10000 }).should('be.visible')
    .click()
  });

  it('Choose the first diamond', () => {
    cy.get('.diamond-search__results--mobile-list .diamond-img a').eq(0).click({force: true})
  });

  it('Select Ring Size G', () => {
    cy.get('.ring-size-select-product')
    .should('be.visible')
    .click({force: true})
    
    cy.get('.ring-size-option-product.show a').contains(/^G$/)
    .should('be.visible')
    .click({force: true})
  });

  it('Add To Cart', () => {
    cy.contains('Payment Options').scrollIntoView()
    cy.get('.ladda-label:contains(Buy Now)').should('be.visible').click({force: true})
  });

  it('Select "Pay In Full Today"', () => {
    cy.get('#payInFullRadio').scrollIntoView()
    .click({force: true})
  });

  it('Checkout', () => {
    cy.get('#checkoutBtnCollapse').scrollIntoView()
    .click({force: true})
  });
  
})