<template></template>
<script setup>
/** This component control all events to drawflow object */
import { getCurrentInstance } from "vue";
import useProgramStore from "../store/program";

let dfcontrol =
  getCurrentInstance().appContext.config.globalProperties.$df.value;

const programStore = useProgramStore();

dfcontrol.on("nodeRemoved", function (id) {
  programStore.removeNodeProgram(id);
});
</script>
