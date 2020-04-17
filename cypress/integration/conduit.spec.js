describe('conduit app test', () => {
    it('show some post', () => {
        cy.visit("/")
        cy.get('.article-preview').should('have.length', 10)
  })
    it('show the first post', () => {
        cy.server()

        // we set the response to be the activites.json fixture
        cy.route('GET', '/api/articles*', 'fixture:post.json')
        cy.visit("/")
        cy.get(':nth-child(1) > .article-preview').contains('user_20200417153501')
    })

    it('show no post', () => {
        cy.server()

        // we set the response to be the activites.json fixture
        cy.route('GET', '/api/articles*', 'fixture:noposts.json')
        cy.visit("/")
        cy.get('.article-preview').should('have.length', 0)
    })
}