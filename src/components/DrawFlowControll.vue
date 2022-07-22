<template></template>
<script setup>
/** This component control all events to drawflow object */
import { getCurrentInstance, watch } from "vue";
import useProgramStore from "../store/program";

let dfcontrol =
  getCurrentInstance().appContext.config.globalProperties.$df.value;
const programStore = useProgramStore();

dfcontrol.on("nodeRemoved", function (id) {
  programStore.removeNodeProgram(id);
});

dfcontrol.on("connectionCreated", function (connectionNode) {
  const node = programStore.getNode(connectionNode.input_id);
  if (connectionNode.input_class == "input_1") {
    node.nodeRefInput1 = connectionNode.output_id;
  } else {
    node.nodeRefInput2 = connectionNode.output_id;
  }
});

dfcontrol.on("connectionRemoved", function (connectionNode) {
  const node = programStore.getNode(connectionNode.input_id);
  if (connectionNode.input_class == "input_1") {
    node.nodeRefInput1 = null;
  } else {
    node.nodeRefInput2 = null;
  }
});
</script>
