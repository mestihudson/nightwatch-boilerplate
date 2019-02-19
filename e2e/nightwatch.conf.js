module.exports = {
  src_folders : ['tests/specs'],
  output_folder : 'tests/reports',
  globals_path : 'tests/globals.js',
  custom_commands_path : 'tests/custom-commands',
  page_objects_path : 'tests/page-objects',
  test_settings: {
    default: {
      selenium_host: 'hub',
      selenium_port: 4444,
      start_process: false,
      desiredCapabilities: {
        loggingPrefs: { 'browser': 'ALL' },
        handlesAlerts: true,
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      screenshots: {
        enabled: true,
        path: 'tests/screenshots',
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
