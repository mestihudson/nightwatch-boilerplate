module.exports = {
  reporter : (results, done) => {
    reporter.fn(results, done)
    done()
  },
  beforeEach: (browser, done) => {
    const logOn = false
    browser
      .getLogTypes(function(result) {
        if (logOn)
          console.log(result)
        return browser
      })
      .getLog('browser', function(result) {
        if (logOn)
          console.log(result)
        return browser
      })
      .source(function (result) {
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