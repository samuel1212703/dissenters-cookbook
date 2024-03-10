import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://dissenters-cookbook.web.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});