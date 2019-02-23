const mock = require('../mock-server')
const BASE_URL = process.env.BASE_URL
const fixtures = {
  EMPRESTIMOS: 'Empréstimos',
  LIVROS: 'Livros',
  LEITORES: 'Leitores',
	EMPRESTEI: 'Emprestei'
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
      .waitForElementVisible(`//a[text()='${fixtures.LEITORES}']`)
      .waitForElementVisible(`//a[text()='${fixtures.LIVROS}']`)
      .waitForElementVisible(`//a[text()='${fixtures.EMPRESTIMOS}']`)
  },
  "Entrar em 'Leitores'": (browser) => {
    browser
      .url(BASE_URL)
      .useXpath()
      .waitForElementVisible(`//a[text()='${fixtures.LEITORES}']`)
      .click(`//a[text()='${fixtures.LEITORES}']`)
      .waitForElementVisible(`//h3[text()='${fixtures.LEITORES}']`)
  },
  "Entrar em 'Livros'": (browser) => {
    browser
      .url(BASE_URL)
      .useXpath()
      .waitForElementVisible(`//a[text()='${fixtures.LIVROS}']`)
      .click(`//a[text()='${fixtures.LIVROS}']`)
      .waitForElementVisible(`//h3[text()='${fixtures.LIVROS}']`)
  },
  "Entrar em 'Empréstimos'": (browser) => {
    browser
      .url(BASE_URL)
      .useXpath()
      .waitForElementVisible(`//a[text()='${fixtures.EMPRESTIMOS}']`)
      .click(`//a[text()='${fixtures.EMPRESTIMOS}']`)
      .waitForElementVisible(`//h3[text()='${fixtures.EMPRESTIMOS}']`)
  }
}
