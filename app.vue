<template>
  <div>
    <pre>error:  {{ error }}</pre>
    <pre>pending:  {{ pending }}</pre>
    <pre>refresh:  {{ refresh }}</pre>
    <pre>{{ data }}</pre>
    <NuxtWelcome />
  </div>
</template>
<script setup>
const { data, pending, error, refresh } = useAsyncData("hello api", () =>
  $fetch("/api/hello")
);
</script>
