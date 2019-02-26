const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
// const Principal = require('./pages/Principal')
function Principal () {}
Principal.prototype.titulo = function () {
  return 'Emprestei'
}

Given(/^eu sou um usuário comum$/, async () => {
  // const driver = new Builder()
  try {
    const page = Principal()
    expect(page.titulo()).to.be('Emprestei')
    // await driver.get(process.env.BASE_URL)
    // const title = await driver.getTitle()
    // console.log(title)
  } catch (e) {
    throw new Error(e)
  }
})

When(/^eu entro$/, () => 'pending')

Then(/^eu visualizo as seguintes opções$/, () => 'pending')
