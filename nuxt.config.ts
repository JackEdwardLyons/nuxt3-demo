// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  preset: "vercel",

  target: "static",
  // Config within public will be also exposed to the client

  runtimeConfig: {
    // Private config that is only available on the server

    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_API_WRITE_KEY: process.env.ALGOLIA_API_WRITE_KEY,

    // PREVIEW KEYS: REMOVE AND MERGE PROPERLY

    CF_CMA_KEY: process.env.CF_CMA_KEY,
    CF_SPACE: process.env.CF_SPACE,
    CF_CDA_KEY: process.env.CF_CDA_KEY,
    CF_CPA_KEY: process.env.CF_CPA_KEY,
    CF_ENV: process.env.CF_ENV,
    CF_IS_ALLOW_PREVIEW: process.env.VITE_CF_IS_ALLOW_PREVIEW,

    // END PREVIEW KEYS
    public: {
      CF_CMA_KEY: process.env.CF_CMA_KEY,
      CF_SPACE: process.env.CF_SPACE,
      CF_CDA_KEY: process.env.CF_CDA_KEY,
      CF_CPA_KEY: process.env.CF_CPA_KEY,
      CF_ENV: process.env.CF_ENV,
      CF_IS_ALLOW_PREVIEW: process.env.VITE_CF_IS_ALLOW_PREVIEW,
      NUXT_ENV_VERCEL_ENV: process.env.NODE_ENV,
      ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
      ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,

      // algolia has two search indexes: `dev_games` and `prod_games`. which one are we using?

      ALGOLIA_INDEX_PREFIX: process.env.ALGOLIA_INDEX_PREFIX || "prod_",

      recaptcha: {
        /* reCAPTCHA options */
        siteKey: process.env.RECAPTCHA_PUBLIC_KEY,
      },

      gtm: {
        GTM_ID: process.env.GTM_ID,
        G_OPTIMIZE_ID: process.env.G_OPTIMIZE_ID,
      },
    },
  },
});
