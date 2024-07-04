
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "requestTimeout": 60000,
  "responseTimeout":60000,
  "pageLoadTimeout": 180000,
  "video": false,
  "viewportWidth": 1366,
  "viewportHeight": 768,
  "defaultCommandTimeout": 9000,
  "screenshotsFolder": "cypress/reports/mochareports/assets",
  "screenshotOnRunFailure": true,
  "reporter": "cypress-multi-reporters",
  "watchForFileChanges": false,
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": true,
      "json": true
    }
  },
  "numTestsKeptInMemory": 0,
  "experimentalMemoryManagement": true,
  "env": {
    "hostname": "10.91.10.79",
    "lighthouse": false,
    "accessibility": 50,
    "performance": 5,
    "seo": 10,
    "host": "10.91.9.110","cucumberautocomplete.steps"
    "db": {
      "host": "10.91.9.110",
      "user": "refill",
      "password": "refill"
      step_definitions
    },
    "TAGS": "@Test1"
  },
  "e2e": {
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    "baseUrl": "http://10.91.9.110/",
    "excludeSpecPattern": ["*.js", "*.md"]
  }
});
