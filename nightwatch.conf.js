const PKG = require('./package.json');
const GLOBALS = './globals.js';
const url = require('./env/url.js');
// const seleniumServer = require('selenium-server');
// const chromedriver = require('chromedriver');
const firefoxdriver = require('geckodriver');

const config = {
  "src_folders": ["test"],
  "output_folder": "./reports",
  "reporter": 'globals.reporter',
  "custom_commands_path": './custom_commands',
  'custom_assertions_path': '',
  "page_objects_path": './page_objects',
  "globals_path": GLOBALS,
  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium-server-standalone-4.0.0-alpha-1.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver",
      "webdriver.firefox.driver": firefoxdriver.path
    }
  },
  "live_output": true,
  "test_workers" : {
    "enabled": false,
    "workers": "auto"
  },
  "test_settings": {
    "default": {
        "launch_url": 'https://ahab.inlottodev.com/',
        "selenium_port": 4444,
        "selenium_host": "localhost",
        "silent": true,
        "globals": {
          "waitForConditionTimeout": 10000,
          "url": url.index,
          "rtContext": {}
        },
        "desiredCapabilities" : {
            "browserName" : "chrome",
            "javascriptEnabled" : true,
            "acceptSslCerts" : true,
          }
      },
    "firefox": {
        "desiredCapabilities": {
            "browserName": "firefox",
            "javascriptEnabled": true,
            "acceptSslCerts": true
        }
    },
  }
}

module.exports = config;
