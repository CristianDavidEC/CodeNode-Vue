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
            @click="nodeInfo.operation = 'Add'"
            :class="nodeInfo.operation == 'Add' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconPlusSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = 'Subtract'"
            :class="
              nodeInfo.operation == 'Subtract' ? 'bg-blue-900 text-white' : ''
            "
          >
            <BIconDashSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = 'Multiply'"
            :class="
              nodeInfo.operation == 'Multiply' ? 'bg-blue-900 text-white' : ''
            "
          >
            <BIconXSquare />
          </span>

          <span
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="nodeInfo.operation = 'Divide'"
            :class="
              nodeInfo.operation == 'Divide' ? 'bg-blue-900 text-white' : ''
            "
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
  value1: 0,
  value2: 0,
});
programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};
</script>

<style></style>
