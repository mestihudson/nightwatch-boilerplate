import { setDefaultTimeout, AfterAll, BeforeAll } from 'cucumber'
import { createSession, closeSession, startWebDriver, stopWebDriver } from 'nightwatch-api'

setDefaultTimeout(60 * 1000)

BeforeAll(async () => {
  await startWebDriver({ env: process.env.browser || 'firefox,chrome' })
  await createSession()
})

AfterAll(async () => {
  // await closeSession()
  await stopWebDriver()
})
