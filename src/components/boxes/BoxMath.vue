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
  toPythonCode(nodeChanged);
  calculateValue(nodeChanged);
});

const toPythonCode = (node) => {
  if (node.nodeRefInput1 && node.nodeRefInput2) {
    const nodeRef1 = programStore.getNode(node.nodeRefInput1);
    const nodeRef2 = programStore.getNode(node.nodeRefInput2);
    node.pythonCode = `${nodeRef1.identifier} ${node.operation} ${nodeRef2.identifier}`;
  } else {
    node.pythonCode = null;
  }
};

const calculateValue = (node) => {
  console.log(node.nodeRefInput1, node.nodeRefInput2);
  if (node.nodeRefInput1 && node.nodeRefInput2) {
    operate(node);
  } else {
    node.value = null;
  }
};

const operate = (nodeChange) => {
  const nodeRef1 = programStore.getNode(nodeChange.nodeRefInput2);
  const nodeRef2 = programStore.getNode(nodeChange.nodeRefInput2);

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
};
</script>

<style></style>
