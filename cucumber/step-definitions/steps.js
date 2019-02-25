import { client } from 'nightwatch-api'
import { Given, When, Then, AfterAll, BeforeAll} from 'cucumber'

import mock from '../mock-server'

const message = 'Smoke on the Water!'

BeforeAll(async () => {
  await mock.start()
})

AfterAll(async () => {
  await mock.stop()
})

Given('eu sou um elaborador de uma unidade', async () => {
  mock
    .reset({
      routes: {
        '/api': {
          'get:/message': (q, s) => s.json({ message })
        }
      }
    })
})

When('eu crio um novo risco', () => {
  const BASE_URL = process.env.BASE_URL
  client
    .url(BASE_URL)
    .verify.titleContains('Emprestei')
})

Then('eu visualizo o mesmo na lista', () => {
  // return 'pending'
})
