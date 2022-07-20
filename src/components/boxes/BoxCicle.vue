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
  from: 0,
  to: 0,
  cicle: {},
});

programStore.addNodeProgram(nodeInfo);

const addNodeId = (event) => {
  nodeInfo.nodeId = event;
};

watch(nodeInfo, (val) => {
  console.log(val);
});
</script>
