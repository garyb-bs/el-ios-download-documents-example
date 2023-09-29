var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  specs: [
    '../../src/test/download.spec.js'
  ],
  services: [['browserstack'], 'devtools'],
  capabilities: [{
    maxInstances: 1,
    'browserstack.maskCommands':'setValues, getValues, setCookies, getCookies',
    'browserstack.debug': true,
    'browserstack.video': true,
    'browserstack.networkLogs': true,
    "osVersion" : "16",
    "deviceName" : "iPhone 14 Pro",
    browserName: 'Safari',
    seleniumCdp: true,
    seleniumVersion: "4.7.2",
    browser_version: "latest",
    acceptInsecureCerts: true,
    realMobile: true,
    autoGrantPermissions: true,
    // name: (require('minimist')(process.argv.slice(2)))['bstack-session-name'] || 'default_name', //To set a custom test name
    build: process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio' + " - " + new Date().getTime()
  }],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
