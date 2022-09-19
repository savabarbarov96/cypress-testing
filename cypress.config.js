const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      watchForFileChanges: false
      // implement node event listeners here
    },
  },
});
