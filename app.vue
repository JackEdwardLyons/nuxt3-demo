<template>
  <div>
    <pre>{{ data }}</pre>
    <NuxtWelcome />
  </div>
</template>
<script setup>
const { data } = useFetch("/api/hello");
</script>
