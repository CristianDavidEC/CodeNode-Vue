<template>
  <BoxNode title="Variable">
    <label for="Identify" class="text-blue-900 ml-2">Identify</label>
    <input
      type="text"
      id="Identify"
      name="Identify"
      class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
      placeholder="Identify to Variable"
    />

    <label for="Value" class="text-blue-900 ml-2 pt-2">Value</label>
    <input
      type="number"
      id="Value"
      name="Value"
      class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
      placeholder="Numerical Value"
    />
  </BoxNode>
</template>

<script setup>
import BoxNode from "./BoxNode.vue";
</script>

<style></style>
