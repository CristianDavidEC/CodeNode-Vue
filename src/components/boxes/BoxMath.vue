<template>
  <BoxNode title="Math Operation" @onNodeId="addNodeId($event)">
    <template #icon>
      <BIconCalculator class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="text-center">
        <h1 class="title-color font-semibold">Value 1</h1>

        <div class="flex justify-between px-5 text-2xl my-3 text-blue-900">
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
} from "bootstrap-icons-vue";

import BoxNode from "./BoxNode.vue";

const programStore = useProgramStore();
const nodeInfo = reactive({
  type: "MathOperation",
  nodeId: "",
  operation: "",
  nodeRefInput1: null,
  nodeRefInput2: null,
  value: null,
  parentNode: null,
  pytonCode: null,
});

programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(nodeInfo, (nodeChanged) => {
  toPytonCode(nodeChanged);
});

const toPytonCode = (node) => {
  const { nodeRefInput1, nodeRefInput2, operation } = node;
  if (nodeRefInput1 && nodeRefInput2) {
    const node1 = programStore.getNode(nodeRefInput1);
    const node2 = programStore.getNode(nodeRefInput2);
    nodeInfo.pytonCode = `${node1.identifier} ${operation} ${node2.identifier}`;

    console.log("a = " + nodeInfo.pytonCode);
  }
};
</script>

<style></style>
