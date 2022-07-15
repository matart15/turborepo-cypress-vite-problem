import { Button } from 'ui'                            // <------------- this does not works
// import { Button } from '../../src/Button1'          // <------------- this works
describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    cy.mount(<Button />);
  })
})