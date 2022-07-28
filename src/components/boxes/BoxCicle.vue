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
  const { nodeRefInput1, nodeRefInput2, parentNode } = node;

  if (nodeRefInput1 && nodeRefInput2) {
    const nodeRef1 = programStore.getNode(nodeRefInput1);
    const nodeRef2 = programStore.getNode(nodeRefInput2);
    const isParent = parentNode ? "\t" : "";

    node.pythonCode =
      "for i in range( " +
      nodeRef1.identifier +
      ", " +
      nodeRef2.identifier +
      " + 1 ):\n" +
      cicleCode(node.cicle, isParent);
  } else {
    node.pythonCode = "";
  }
  console.log(node.pythonCode);
};

const cicleCode = (arrayChilds, isParent) => {
  let pyCode = "";
  for (const idNode of arrayChilds) {
    const { pythonCode } = programStore.getNode(idNode);
    pyCode += "\t" + isParent + pythonCode + "\n";
  }
  return pyCode;
};
</script>
