<template>
  <div id="drawflow" @drop="drop($event)" @dragover="allowDrop($event)"></div>
</template>

<script setup>
import Drawflow from "drawflow";
import { h, render, onMounted, ref } from "vue";
import BoxVariable from "./boxes/BoxVariable.vue";

let editor = ref({});
const Vue = { version: 3, h, render };

/**
 * Create a instance of Drawflow and register the node components
 */
onMounted(() => {
  const id = document.getElementById("drawflow");
  editor = new Drawflow(id, Vue);
  editor.start();
  editor.registerNode("1", BoxVariable, {}, {});
});

/**
 * Add new node to drawflow after the drop event
 */
const drop = (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("node");
  console.log(ev.clientX, ev.clientY);
  let pos_x =
    ev.clientX *
      (editor.precanvas.clientWidth /
        (editor.precanvas.clientWidth * editor.zoom)) -
    editor.precanvas.getBoundingClientRect().x *
      (editor.precanvas.clientWidth /
        (editor.precanvas.clientWidth * editor.zoom));
  let pos_y =
    ev.clientY *
      (editor.precanvas.clientHeight /
        (editor.precanvas.clientHeight * editor.zoom)) -
    editor.precanvas.getBoundingClientRect().y *
      (editor.precanvas.clientHeight /
        (editor.precanvas.clientHeight * editor.zoom));
  console.log(pos_x, pos_y);
  editor.addNode(data, 1, 1, pos_x, pos_y, data, {}, data, "vue");
};

const allowDrop = (ev) => {
  ev.preventDefault();
};
</script>

<style></style>
