<template>
  <div>
    <h2>Hello page</h2>
    <pre>error:  {{ error }}</pre>
    <pre>pending:  {{ pending }}</pre>

    <pre>{{ data }}</pre>
    <NuxtWelcome />
  </div>
</template>
<script setup>
const route = useRoute();

const { data, pending, error } = await useAsyncData("hello api", (context) => {
  const index = route.query.index;

  return $fetch("/api/hello/" + index);
});
</script>
