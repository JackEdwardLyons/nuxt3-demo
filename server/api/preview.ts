import cycle from "cycle";
import contentful from "contentful";

const { decycle } = cycle;

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  console.log("server/api/preview/index.ts");

  const contentfulClient = contentful.createClient({
    space: config.CF_SPACE,

    accessToken: config.CF_IS_ALLOW_PREVIEW
      ? config.CF_CPA_KEY
      : config.CF_CDA_KEY,

    timeout: 60000,

    retryLimit: 10,

    environment: config.CF_ENV || "master",

    host: config.CF_IS_ALLOW_PREVIEW
      ? "preview.contentful.com"
      : "cdn.contentful.com",
  });

  const { entryId, locale } = getQuery(event);

  if (!entryId) {
    return "Resource not found";
  }

  // @todo: should this import factory / $entry ???

  const fetchedEntry = await contentfulClient
    .getEntry(entryId, { include: 10, locale })
    .then((response) => response)
    .catch((error) => {
      return error;
    });

  console.log({ fetchedEntry });

  return fetchedEntry;

  // try {
  //   return decycle(fetchedEntry.toPlainObject());
  // } catch (error) {
  //   return `Internal Server Error. Entry ID: ${entryId}. ${error.toString()}`;
  // }
});
