import { client } from 'nightwatch-api'
import { Given, When, Then, BeforeAll, AfterAll } from 'cucumber'
import mock from '../tests/mock-server'

BeforeAll(async () => {
	mock.start()
})

AfterAll(async () => {
	mock.stop()
})

Given(/^eu sou um usuário comum$/, async () => {
	mock.reset({
		routes: []
	})
})

When(/^eu entro$/, async () => {
	await client
		.url(process.env.BASE_URL)
})

Then(/^eu visualizo as seguintes opções$/, async () => {
  await client
    .assert.titleContains('Emprestei')
    .waitForElementVisible(`//a[text()='Usuários']`)
    .waitForElementVisible(`//a[text()='Livros']`)
    .waitForElementVisible(`//a[text()='Empréstimos']`)
})
