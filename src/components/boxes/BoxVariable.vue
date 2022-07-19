<template>
  <span ref="element"></span>
  <BoxNode title="Variable">
    <template #icon>
      <BIconBoxes class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <label for="Identify" class="text-blue-900 ml-2 font-medium">
        Identify
      </label>
      <input
        type="text"
        id="Identify"
        name="Identify"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        placeholder="Identify to Variable"
      />

      <label for="Value" class="text-blue-900 ml-2 pt-2 font-medium"
        >Value</label
      >
      <input
        type="number"
        id="Value"
        name="Value"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        placeholder="Numerical Value"
      />
    </template>
  </BoxNode>
</template>

<script setup>
import BoxNode from "./BoxNode.vue";
import { BIconBoxes } from "bootstrap-icons-vue";
import { ref, onMounted, nextTick } from "vue";

const element = ref(null);
const nodeId = ref(0);

onMounted(async () => {
  await nextTick();
  nodeId.value = element.value.parentElement.parentElement.id.slice(5);
  console.log(nodeId.value);
  //dataNode.value = df.getNodeFromId(nodeId.value);

  //url.value = dataNode.value.data.url;
  //method.value = dataNode.value.data.method;
});
</script>

<style></style>
