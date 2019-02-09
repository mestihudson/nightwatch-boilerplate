var baseConfig = require('../nightwatch.conf.js');

var testConfig = Object.assign({}, baseConfig, {
  src_folders : ['src/'],
  output_folder : 'reports/',
  custom_commands_path : 'custom-commands/',
  page_objects_path : 'page-objects/',
  globals_path : 'globals.js'
});

module.exports = testConfig;