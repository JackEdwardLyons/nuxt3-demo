<template>
  <div>
    <div>
      <pre>data: {{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import cycle from "cycle";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { entryId, locale = "en-AU" } = route.query;

const { retrocycle } = cycle;

const pageTitle = ref("Loading preview.");

function cancelPreviewLoad(message = "Cannot generate preview") {
  throw new Error(message);
}

const { data } = useAsyncData(
  "previewPageQuery",

  async (context) => {
    if (!entryId) {
      return cancelPreviewLoad(
        `entryId error: ${entryId} - locale: ${locale} - route context: ${JSON.stringify(
          context._route
        )}`
      );
    }

    const previewResponse = await $fetch(
      `/api/preview?entryId=${entryId}&locale=${locale}`
    );

    if (!previewResponse) {
      return cancelPreviewLoad(
        "No content to preview, data: " + previewResponse
      );
    }

    // as api/preview 'decycles' JSON to not be cyclical, needs those $refs resolved

    return previewResponse;
  }
);

console.log({ data });
</script>
