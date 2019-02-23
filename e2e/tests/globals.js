const HtmlReporter = require('nightwatch-html-reporter')
const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports',
  reportFilename:'report.html',
  themeName: 'cover'
})

module.exports = {
  logger: require('./custom-commands/logger.js'),
  scrollToClick: require('./custom-commands/scrollToClick'),
  scrollToSelector: require('./custom-commands/scrollToSelector'),
  reporter : (results, done) => {
    reporter.fn(results, done)
    done()
  },
  beforeEach: (browser, done) => {
    const logOn = false
    browser
      .getLogTypes((result) => {
        if (logOn)
          console.log(result)
        return browser
      })
      .getLog('browser', (result) => {
        if (logOn)
          console.log(result)
        return browser
      })
      .source((result) => {
        if (logOn)
          console.log(result)
        return browser
      })
    done()
  },
  afterEach: (browser, done) => {
    browser.end()
    setTimeout(() => {
      done()
    }, 200)
  }
}