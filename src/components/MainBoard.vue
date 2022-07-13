<template>
  <div id="drawflow" @drop="drop($event)" @dragover="allowDrop($event)"></div>
</template>

<script setup>
import Drawflow from "drawflow";
import { h, render, onMounted, ref } from "vue";
import Node from "./Node.vue";

let editor = ref({});
const Vue = { version: 3, h, render };

onMounted(() => {
  const id = document.getElementById("drawflow");
  editor = new Drawflow(id, Vue);
  editor.start();
  editor.registerNode("1", Node, {}, {});
});

const drop = (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("node");
  console.log(typeof data);
  console.log(editor);
  editor.addNode(data, 1, 1, 200, 100, data, {}, data, "vue");
};

const allowDrop = (ev) => {
  ev.preventDefault();
};
</script>

<style>
#drawflow {
  width: 100%;
  height: 100%;
  text-align: initial;
  background: #ffffff;
  background-size: 20px 20px;
  background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px),
    linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
}
</style>
