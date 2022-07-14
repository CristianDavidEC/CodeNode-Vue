<template>
  <div class="flex-col justify-center w-full">
    <div
      class="text-center py-3 bg-blue-100 border-b-2 border-blue-900 rounded-t-xl"
    >
      <h1 class="title-color text-xl font-semibold">{{ title }}</h1>
    </div>
    <div class="p-3 flex flex-col">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style>
.title-color {
  color: darkblue;
}
</style>
