<template>
  <BoxNode title="Assign" @onNodeId="addNodeId($event)">
    <template #icon>
      <BIconBoxArrowInRight class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <label for="Identify" class="text-blue-900 ml-2 font-medium"
        >Identify</label
      >
      <input
        type="text"
        id="Identify"
        name="Identify"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        placeholder="Identify to Assign"
        v-model="nodeInfo.identifier"
      />

      <label for="Value" class="text-blue-900 ml-2 font-medium pt-2"
        >Value</label
      >
      <input
        type="number"
        id="Value"
        name="Value"
        class="border-2 border-blue-200 rounded-lg px-2 py-1 text-sm text-blue-900 focus:border-blue-400 focus:outline-none"
        v-model="nodeInfo.value"
        disabled
      />
    </template>
  </BoxNode>
</template>

<script setup>
import BoxNode from "./BoxNode.vue";
import useProgramStore from "../../store/program";
import { BIconBoxArrowInRight } from "bootstrap-icons-vue";
import { reactive, watch } from "vue";

const programStore = useProgramStore();
const nodeInfo = reactive({
  type: "Assign",
  nodeId: "",
  identifier: "",
  nodeRefInput1: null,
  value: null,
  parentNode: null,
});

programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(
  () => nodeInfo.nodeRefInput1,
  (value) => {
    if (value) {
      const nodeReference = programStore.getNode(value);
      nodeInfo.value = nodeReference.value;
    } else {
      nodeInfo.value = null;
    }
  }
);
</script>

<style></style>
