describe('create-user-form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    })

    const unameInput = () => cy.get('input[name="Username"]')
    const pwdInput = () => cy.get('input[name="Password"]')
    const agreeChk =() => cy.get('input[name="signinTos"]')
    const submitBtn = () => cy.get('button[name="submitButton"]')

    it('elements are there', () => {
        unameInput().should('exist')
        pwdInput().should('exist')
        agreeChk().should('exist')
        submitBtn().should('exist')

    })
    
    it('button and checkbox work or not work as they should or should not', () => {
        submitBtn().should('be.disabled')
        agreeChk().should('not.be.checked')
            .click()
            .should('be.checked')
            .click()
            .should('not.be.checked')
    })


    it('can type in all text fields and that activates submit button and it submits', () => {
        unameInput().type('text@text.text')
        pwdInput().type('text@text.text')
        unameInput().should('have.value','text@text.text')
        pwdInput().should('have.value','text@text.text')
        agreeChk().click()
        submitBtn().should('be.enabled').click()

    })
})