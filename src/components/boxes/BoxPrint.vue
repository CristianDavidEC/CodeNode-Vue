<template>
  <BoxNode title="Print" @onNodeId="addNodeId($event)">
    <template #icon>
      <BIconPrinter class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="flex flex-col items-center">
        <label for="Identify" class="text-blue-900 ml-2 font-medium"
          >Message</label
        >
        <input
          type="text"
          id="Identify"
          name="Identify"
          class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
          placeholder="Message to Print"
          v-model="nodeInfo.message"
        />
        <h1 class="title-color font-semibold mt-2">Value to Print</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch } from "vue";
import { BIconPrinter } from "bootstrap-icons-vue";

import BoxNode from "./BoxNode.vue";

const nodeInfo = reactive({
  type: "Print",
  nodeId: "",
  message: "",
  valuePrint: "",
});

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(nodeInfo, (val) => {
  console.log(val);
});
</script>
