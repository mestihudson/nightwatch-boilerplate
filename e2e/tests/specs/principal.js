const mock = require('../mock-server')
const BASE_URL = process.env.BASE_URL

module.exports = {
  beforeAll: () => {
    mock.start()
  },
  afterAll: () => {
    mock.stop()
  },
  beforeEach: (browser) => {},
  'Entrar': (browser) => {
    browser
      .url(BASE_URL)
      .verify.titleContains('Emprestei')
      .useXpath()
      .waitForElementVisible('//a[text()=\'Usuários\']')
      .waitForElementVisible('//a[text()=\'Livros\']')
      .waitForElementVisible('//a[text()=\'Empréstimos\']')
  },
  'Entrar \'Usuários\'': (browser) => {
    browser
      .url(BASE_URL)
      .useXpath()
      .waitForElementVisible('//a[text()=\'Usuários\']')
      .click('//a[text()=\'Usuários\']')
      .waitForElementVisible('//h3[text()=\'Usuários\']')
  }
}
