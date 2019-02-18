const deepmerge = require('deepmerge')
const userOptions = JSON.parse(process.env.NIGHTWATCH_USER_OPTIONS || '{}')

module.exports = deepmerge(
  {
    src_folders: ['tests/e2e/specs'],
    output_folder: 'tests/e2e/reports',
    custom_assertions_path: ['tests/e2e/custom-assertions'],
    test_settings: {
      default: {
        selenium_host: 'hub',
        selenium_port: 4444,
        start_process: false,
        desiredCapabilities: {
          loggingPrefs: { browser: 'ALL' },
          handlesAlerts: true,
          javascriptEnabled: true,
          acceptSslCerts: true
        },
        screenshots: {
          enabled: true,
          path: 'tests/e2e/screenshots',
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
          browserName: 'chrome'
        }
      }
    }
  },
  userOptions
)
