const mock = require('../mock-server')

const BASE_URL = process.env.BASE_URL

module.exports = {
  beforeEach: () => {
    mock.start()
  },
  afterEach: () => {
    mock.stop()
  },
  'Entrar': (browser) => {
    const message = 'Smoke on the Water!'
    mock
      .reset({
        routes: {
          '/api': {
            'get:/message': (q, s) => s.json({ message })
          }
        }
      })
    browser
      .url(BASE_URL)
      .verify.titleContains('App - Título')
      .useXpath()
      .waitForElementVisible(`//h3[text()="${message}"]`)
  //   browser
  //     .verify.titleContains('Sistema de Gestão de Riscos e Controles Internos')
  //     .useCss()
  //     .waitForElementPresent('header')
  //     .useXpath()
  //     .waitForElementVisible('//a[text()="Gestão de Riscos"]')
  // },
  // 'Entrar como Administrador': (browser) => {
  //   browser
  //     .useXpath()
  //     .waitForElementVisible('//a[text()="Análises"]')
  //     .waitForElementVisible('//a[text()="Administrar"]')
  //     .waitForElementPresent('//a[text()="Atividades Relevantes"]')
  //     .waitForElementPresent('//a[text()="Processos"]')
  //     .waitForElementPresent('//a[text()="Vincular Unidades à Processos"]')
  //     .waitForElementPresent('//a[text()="Usuários/Perfis"]')
  //     .waitForElementVisible('//a[text()="Matriz de Calor"]')
  //     .waitForElementVisible('//a[text()="Painel de Riscos"]')
  }
}
