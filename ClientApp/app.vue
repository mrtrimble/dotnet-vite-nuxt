<script setup lang="ts">
import { onMounted, ref } from "vue";

interface TestData {
  test: string;
}

const result = ref<TestData>({ test: "" })
onMounted(async () => {
  result.value = await (await fetch("/api/test")).json();
});

</script>

<template>
  <h1>Hello World!</h1>
  <div>Result: {{ result.test }}</div>
</template>