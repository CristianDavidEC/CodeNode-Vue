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
  pythonCode: null,
});

programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(nodeInfo, (nodeChange) => {
  assigValue(nodeChange.nodeRefInput1);
  toPythonCode(nodeChange);
});

const assigValue = (reference) => {
  const nodeRef = programStore.getNode(reference);
  nodeRef ? (nodeInfo.value = nodeRef.value) : (nodeInfo.value = null);
};

const toPythonCode = (node) => {
  const nodeRef = programStore.getNode(node.nodeRefInput1);

  if (nodeRef) {
    if (nodeRef.type == "Variable" || nodeRef.type == "Assign") {
      node.pythonCode = `${node.identifier} = ${nodeRef.identifier}`;
    } else {
      node.pythonCode = `${node.identifier} = ${nodeRef.pythonCode}`;
    }
  } else {
    node.pythonCode = "";
  }
};
</script>

<style></style>
