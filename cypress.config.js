const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cps-stage.coilcraft.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
