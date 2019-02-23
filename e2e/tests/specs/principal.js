const mock = require('../mock-server')
const BASE_URL = process.env.BASE_URL
const fixtures = {
	EMPRESTEI: 'Emprestei',
  USUARIOS: 'Leitores'
}

module.exports = {
  beforeAll: () => {
    mock.start()
  },
  afterAll: () => {
    mock.stop()
  },
  'Entrar': (browser) => {
    browser
      .url(BASE_URL)
      .verify.titleContains(`${fixtures.EMPRESTEI}`)
      .useXpath()
      .waitForElementVisible(`//h1[text()='${fixtures.EMPRESTEI}']`)
      .waitForElementVisible(`//a[text()='${fixtures.USUARIOS}']`)
      .waitForElementVisible(`//a[text()='Livros']`)
      .waitForElementVisible(`//a[text()='Empréstimos']`)
  },
  "Entrar 'Usuários'": (browser) => {
    browser
      .url(BASE_URL)
      .useXpath()
      .waitForElementVisible(`//a[text()='${fixtures.USUARIOS}']`)
      .click(`//a[text()='${fixtures.USUARIOS}']`)
      .waitForElementVisible(`//h3[text()='${fixtures.USUARIOS}']`)
  }
}
