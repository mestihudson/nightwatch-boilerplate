module.exports = {
  test_settings: {
    default: {
      selenium_host: 'hub',
      selenium_port: 4444,
      start_process: false,
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
        handlesAlerts: true,
        loggingPrefs: { 'browser': 'ALL' }
      },
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true,
        on_error: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      }
    }
  }
}
