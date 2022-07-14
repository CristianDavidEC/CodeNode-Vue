<template>
  <div class="flex-col justify-center w-full">
    <div
      class="flex justify-center items-center text-center py-1 bg-blue-100 border-b border-blue-900 rounded-t-xl"
    >
      <slot name="icon"></slot>
      <h1 class="title-color font-semibold ml-2">{{ title }}</h1>
    </div>
    <div class="p-2 flex flex-col">
      <slot name="content"></slot>
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
