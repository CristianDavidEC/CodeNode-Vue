<template>
  <BoxNode title="Cicle" @onNodeId="addNodeId($event)">
    <template #icon>
      <BIconArrowRepeat class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="flex flex-col items-center">
        <h1 class="title-color font-semibold">From</h1>
        <BIconArrowRepeat class="title-color font-bold text-2xl my-1" />
        <h1 class="title-color font-semibold">To</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch } from "vue";
import useProgramStore from "../../store/program.js";
import { BIconArrowRepeat } from "bootstrap-icons-vue";
import BoxNode from "./BoxNode.vue";
import {
  getNodesReferences,
  generateStatementCode,
} from "../../utilities/functionsNodes.js";

const programStore = useProgramStore();

const nodeInfo = reactive({
  type: "Cicle",
  nodeId: "",
  nodeRefInput1: null,
  nodeRefInput2: null,
  cicle: [],
  parentNode: null,
  pythonCode: null,
});

programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(nodeInfo, (nodeChange) => {
  toPytonCode(nodeChange);
});

const toPytonCode = (node) => {
  if (node.nodeRefInput1 && node.nodeRefInput2) {
    node.pythonCode = formatCode(node);
  } else {
    node.pythonCode = null;
  }
};

const formatCode = (node) => {
  let { nodeRef1, nodeRef2 } = getNodesReferences(node);

  let code =
    "for i in range( " +
    nodeRef1.identifier +
    ", " +
    nodeRef2.identifier +
    " + 1 ):\n" +
    generateStatementCode(node.cicle, node.parentNode);

  return code;
};
</script>
