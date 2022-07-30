<template>
  <BoxNode title="Math Operation" @onNodeId="addNodeId($event)">
    <template #icon>
      <BIconCalculator class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="text-center">
        <h1 class="title-color font-semibold">Value 1</h1>

        <div class="flex justify-between text-2xl my-3 text-blue-900">
          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '+'"
            :class="nodeInfo.operation == '+' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconPlusSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '-'"
            :class="nodeInfo.operation == '-' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconDashSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '*'"
            :class="nodeInfo.operation == '*' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconXSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '/'"
            :class="nodeInfo.operation == '/' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconSlashSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = '%'"
            :class="nodeInfo.operation == '%' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconPercent />
          </span>
        </div>
        <h1 class="title-color font-semibold">Value 2</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { reactive, watch } from "vue";
import useProgramStore from "../../store/program.js";
import {
  BIconCalculator,
  BIconPlusSquare,
  BIconDashSquare,
  BIconXSquare,
  BIconSlashSquare,
  BIconPercent,
} from "bootstrap-icons-vue";
import {
  isValidReference,
  getNodesReferences,
} from "../../utilities/functionsNodes.js";

import BoxNode from "./BoxNode.vue";

const programStore = useProgramStore();
const nodeInfo = reactive({
  type: "MathOperation",
  nodeId: "",
  operation: "+",
  nodeRefInput1: null,
  nodeRefInput2: null,
  value: null,
  parentNode: null,
  pythonCode: null,
});

programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(nodeInfo, (nodeChanged) => {
  if (isValidReference(nodeChanged)) {
    console.log("nodeChanged");
    return calculateValue(nodeChanged);
  }
  nodeChanged.pythonCode = null;
  nodeChanged.value = null;
});

const calculateValue = (nodeChange) => {
  let { nodeRef1, nodeRef2 } = getNodesReferences(nodeChange);
  nodeChange.pythonCode = `${nodeRef1.identifier} ${nodeChange.operation} ${nodeRef2.identifier}`;

  switch (nodeChange.operation) {
    case "+":
      nodeChange.value = nodeRef1.value + nodeRef2.value;
      break;
    case "-":
      nodeChange.value = nodeRef1.value - nodeRef2.value;
      break;
    case "*":
      nodeChange.value = nodeRef1.value * nodeRef2.value;
      break;
    case "/":
      nodeChange.value = nodeRef1.value / nodeRef2.value;
      break;
    case "%":
      nodeChange.value = nodeRef1.value % nodeRef2.value;
      break;
    default:
      nodeChange.value = null;
      break;
  }
  console.log(nodeChange.value);
};
</script>

<style></style>
