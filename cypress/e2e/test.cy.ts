describe('My First Test', () => {
	it('Visits the app root url', () => {
		cy.visit('/folder/Cookbook');
		cy.contains('#container', 'Cookbook');
	});
});
